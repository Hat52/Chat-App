const path = require('path');
const http = require('http');
const express = require('express');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server, {
	cors: {
		origin: ['http://localhost:5173']
	}
});

app.post('/register', (req, res) => {
	res.send({ message: 'I have been hit' });
});

io.on('connection', (socket) => {
	// Join or create a room

	socket.on('join-room', (room) => {
		socket.join(room);
	});

	socket.on('send-message', (data) => {
		socket.to(data.room).emit('receive-message', data);
	});
});

server.listen(5000, () => console.log('server is up and running on port : 5000!'));
