"use strict"

let express = require('express')
let app = express()
let server = app.listen(3000)

app.use(express.static('public'))
console.log("Static fileservice: running")

let socket = require('socket.io')
let io = socket(server)
console.log("Socket server: running")
io.sockets.on('connection', newConnection)

function newConnection(socket) {
	console.log('New Connection: ' + socket.id)

	socket.on('mouse', mouseMsg)
	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data)
		console.log(data)
	}
}
