import './App.css';
import { io } from 'socket.io-client';

function App() {
	const socket = io('http://localhost:5000');
	socket.on('connect', () => {
		console.log(`You have been connected by ID: ${socket.id}`);
	});

	const sendMessage = () => {
		socket.emit('send-message', 'Hello from the other side');
	};
	socket.on('receive-message', (message) => {
		console.log(message);
	});
	return <button onClick={sendMessage}>Send Hi</button>;
}

export default App;
