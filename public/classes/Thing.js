"use strict"

class Thing {
	constructor() {
		this.X = 0
		this.Y = 0
		this.angle = 0
	}

	setLocation(x,y) {
		this.X = x
		this.Y = y
	}

	setAngle(angle) {
		this.angle = angle
	}
}