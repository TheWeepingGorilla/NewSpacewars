"use strict"

let socket

// Attaching p5 to window as a global var to facilitate class files
window.P$ = new p5(p => {

  let c

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.background(51)
    socket = io.connect('http://localhost:3000')
    socket.on('mouse', newDrawing)
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
