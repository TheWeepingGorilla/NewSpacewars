"use strict"

let socket

// Exposing p5 globally as P$ for class files to use (minimal pollution)
window.P$ = new p5(p => {

  // let ship

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.background(51)
    socket = io.connect('http://localhost:3000')
    socket.on('mouse', newDrawing)
    let ship = new Ship()
  }

  p.draw = function () {
  }

  p.mouseDragged = function() {
  	console.log('Sending: ' + p.mouseX + ',' + p.mouseY)
  	let data = {
  		x: p.mouseX,
  		y: p.mouseY
  	}
  	socket.emit('mouse', data)

  	p.noStroke()
  	p.fill(255)
  	p.ellipse(p.mouseX, p.mouseY, 60, 60)
  }

  function newDrawing(data) {
  	p.noStroke()
  	p.fill(255, 0, 100)
  	p.ellipse(data.x, data.y, 60, 60)
  }
}, "sketch01")
