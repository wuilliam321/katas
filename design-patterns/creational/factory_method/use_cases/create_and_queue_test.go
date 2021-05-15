package use_cases

import (
	"testing"

	"github.com/stretchr/testify/mock"
	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/interfaces"
	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/models"
)

type vehicleCreatorMock struct {
	mock.Mock
}

func (c *vehicleCreatorMock) RegisterVehicle() interfaces.IDeliversFood {
	args := c.Called()

	if args.Get(0) != nil {
		return args.Get(0).(interfaces.IDeliversFood)
	}

	return nil
}

func (c *vehicleCreatorMock) QueueVehicleForDeliver(b interfaces.IDeliversFood) {
	c.Called(b)
}

func TestCreateAndQueue(t *testing.T) {
	var creator *vehicleCreatorMock
	tests := []struct {
		name    string
		arrange func()
		assert  func()
	}{
		{
			name: "should create a bike and send to a queue",
			arrange: func() {
				aBike := models.NewBike(2)
				creator.On("RegisterVehicle").Return(aBike)
				creator.On("QueueVehicleForDeliver", aBike)
			},
			assert: func() {
				creator.AssertCalled(t, "RegisterVehicle")
				creator.AssertNumberOfCalls(t, "RegisterVehicle", 1)
				creator.AssertNumberOfCalls(t, "QueueVehicleForDeliver", 1)
			},
		},
		{
			name: "should create a car and send to a queue",
			arrange: func() {
				aCar := models.NewCar(4, "BMW")
				creator.On("RegisterVehicle").Return(aCar)
				creator.On("QueueVehicleForDeliver", aCar)
			},
			assert: func() {
				creator.AssertCalled(t, "RegisterVehicle")
				creator.AssertNumberOfCalls(t, "RegisterVehicle", 1)
				creator.AssertNumberOfCalls(t, "QueueVehicleForDeliver", 1)
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			creator = &vehicleCreatorMock{}
			tt.arrange()
			CreateAndQueue(creator)
			tt.assert()
		})
	}
}
