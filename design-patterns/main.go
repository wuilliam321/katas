package main

import (
	"fmt"
	"os"

	"github.com/wuilliam321/katas/design-patterns/creational/factory_method"
	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/use_cases"
)

func main() {
	Creational_FactoryMethod()
}

func Creational_FactoryMethod() {
	if len(os.Args) == 1 {
		panic("vehicle shoud be provided ./service [vehicle]")
	}

	aVehicle := os.Args[1]
	var allowedTypes = map[string]bool{"bike": true, "car": true}
	if !allowedTypes[aVehicle] {
		panic(fmt.Sprintf("not allowed vehicleType %s", aVehicle))
	}

	DeliverWith(aVehicle)
}

func DeliverWith(aVehicle string) {
	dc, err := factory_method.BuildDeliveryCreator(aVehicle)
	if err != nil {
		panic("error on BuildDeliveryCreator")
	}

	use_cases.CreateAndQueue(dc)
}
