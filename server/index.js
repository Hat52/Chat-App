const io = require('socket.io')(5000, {
	cors: {
		origin: ['http://127.0.0.1:5173']
	}
});
io.on('connection', (socket) => {
	console.log(socket);
	socket.on('send-message', (message) => {
		console.log(message);
		socket.broadcast.emit('receive-message', message);
	});
});
