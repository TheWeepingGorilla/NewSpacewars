"use strict"

class Ship extends Thing {
	draw() {
		P$.strokeWeight(4)
		P$.stroke(240)
		P$.line(24, 0, -16, -12)
		P$.line(-16, -12, 0, 0)
		P$.line(0, 0, -16, 12)
		P$.line(-16, 12, 24, 0)
	}

	drawThrust() {
		P$.strokeWeight(2)
		P$.stroke(240)
		P$.line(-8, 4, -24, 0)
		P$.line(-24, 0, -8, -4)
	}

	info() {
		console.log("I am a ship.")
	}
}