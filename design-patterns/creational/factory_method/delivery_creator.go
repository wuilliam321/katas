package factory_method

import (
	"errors"
	"fmt"

	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/interfaces"
)

func BuildDeliveryCreator(vehicleType string) (interfaces.DeliveryCreator, error) {
	fmt.Printf("BuildDeliveryCreator#%s\n", vehicleType)
	switch vehicleType {
	case "bike":
		return NewBikeCreator(), nil
	case "car":
		return NewCarCreator(), nil
	default:
		return nil, errors.New("invalid vehicleType")
	}
}
