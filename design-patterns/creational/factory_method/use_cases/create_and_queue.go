package use_cases

import (
	"fmt"

	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/interfaces"
)

func CreateAndQueue(dc interfaces.DeliveryCreator) {
	fmt.Printf("CreateAndQueue dc %+v\n", dc)
	vehicle := dc.RegisterVehicle()
	dc.QueueVehicleForDeliver(vehicle)
}
