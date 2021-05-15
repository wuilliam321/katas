package interfaces

type DeliveryCreator interface {
	RegisterVehicle() IDeliversFood
	QueueVehicleForDeliver(IDeliversFood)
}
