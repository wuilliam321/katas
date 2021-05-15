package models

import (
	"fmt"

	"github.com/wuilliam321/katas/design-patterns/creational/factory_method/interfaces"
)

type bike struct {
	Wheels int
}

func NewBike(wheels int) interfaces.IDeliversFood {
	fmt.Println("Bike#NewBike")
	return bike{Wheels: wheels}
}

func (b bike) Deliver() {
	fmt.Println("bike deliver called")
}
