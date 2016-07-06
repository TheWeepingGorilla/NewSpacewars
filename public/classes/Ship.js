"use strict"

class Ship extends Thing {
	draw() {
		this.P$.strokeWeight(4)
		this.P$.stroke(240)
		this.P$.line(24, 0, -16, -12)
		this.P$.line(-16, -12, 0, 0)
		this.P$.line(0, 0, -16, 12)
		this.P$.line(-16, 12, 24, 0)
	}

	drawThrust() {
		this.P$.strokeWeight(2)
		this.P$.stroke(240)
		this.P$.line(-8, 4, -24, 0)
		this.P$.line(-24, 0, -8, -4)
	}

	info() {
		console.log("I am a ship.")
	}
}