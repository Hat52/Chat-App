const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server, {
	cors: {
		origin: ['http://127.0.0.1:5173']
	}
});

io.on('connection', (socket) => {
	socket.on('send-message', (message) => {
		console.log(message);
		socket.broadcast.emit('receive-message', message);
	});
});

server.listen(5000, () => console.log('server is up and running on port : 5000!'));
