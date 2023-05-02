import './App.css';
import { io } from 'socket.io-client';

function App() {
	const socket = io('http://localhost:5000');
	socket.on('connect', () => {
		console.log(`You have been connected by ID: ${socket.id}`);
	});
	socket.emit('test-message', 'Hello g this is a test message');
	return <>Hello world</>;
}

export default App;
