package models

import (
	"fmt"

	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/interfaces"
)

type car struct {
	Wheels int
	Motor  string
}

func NewCar(wheels int, motor string) interfaces.IDeliversFood {
	fmt.Println("Car#NewCar")
	return car{Wheels: wheels, Motor: motor}
}

func (c car) Deliver() {
	fmt.Println("car deliver called")
}
