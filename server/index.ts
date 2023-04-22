const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

app.get('/hit', (req: any, res: any) => {
	res.send('I have been hit');
});

const serverWithSocket = app.listen(3000, () => console.log('Server is up and running'));
const io = new Server(serverWithSocket);

io.on('connection', (socket: any) => {
	console.log('here');
	socket.on('chat message', (msg: any) => {
		console.log('message: ' + msg);
	});
});
