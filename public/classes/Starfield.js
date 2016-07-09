"use strict"

class Starfield {
	constructor() {
		this.numOfStars = 400
		this.starArray = []
		for (let i=0;i<this.numOfStars;i++) {
			this.starArray[i] = {
				"x" : P$.random(0,100),
				"y" : P$.random(0,100),
				"width" : 5,
				"height" : 5}
		}
	}
	draw() {
		for (let i=0;i<this.numOfStars;i++) {
			P$.ellipse(P$.map(this.starArray[i].x, 0, 100, 0, P$.windowWidth),
				P$.map(this.starArray[i].y, 0, 100, 0, P$.windowHeight),
				this.starArray[i].width, this.starArray[i].height)
		}
	}
}

