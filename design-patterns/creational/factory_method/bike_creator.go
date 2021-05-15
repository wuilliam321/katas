package factory_method

import (
	"fmt"

	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/interfaces"
	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/models"
)

type bikeCreator struct {
}

func NewBikeCreator() interfaces.DeliveryCreator {
	return &bikeCreator{}
}

func (bc *bikeCreator) RegisterVehicle() interfaces.IDeliversFood {
	fmt.Println("BikeCreator#RegisterVehicle")
	bike := models.NewBike(2)
	return bike
}

func (bc *bikeCreator) QueueVehicleForDeliver(interfaces.IDeliversFood) {
	fmt.Println("BikeCreator#QueueVehicleForDeliver")
}
