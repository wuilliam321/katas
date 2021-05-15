package factory_method

import (
	"fmt"

	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/interfaces"
	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/models"
)

type carCreator struct {
}

func NewCarCreator() interfaces.DeliveryCreator {
	return &carCreator{}
}

func (cc *carCreator) RegisterVehicle() interfaces.IDeliversFood {
	fmt.Println("CarCreator#RegisterVehicle")
	bike := models.NewCar(2, "BMW")
	return bike
}

func (cc *carCreator) QueueVehicleForDeliver(interfaces.IDeliversFood) {
	fmt.Println("CarCreator#QueueVehicleForDeliver")
}
