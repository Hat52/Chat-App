import { useEffect, useState } from 'react';
import './App.css';
import { Sidebar, MessageContainer } from './components';
import { MessageDummyData } from './constants';
import { socket } from './socket';

function App() {
	const [selectedMessage, setSelectedMessage] = useState(0);
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [fooEvents, setFooEvents] = useState([]);
	console.log(socket.connected);

	useEffect(() => {
		function onConnect() {
			setIsConnected(true);
		}

		function onDisconnect(message: any) {
			// setIsConnected(false);
			console.log(message);
		}

		function onFooEvent(value: any) {
			// setFooEvents(previous:any => [...previous, value]);
		}
		socket.on('send-message', 'hello there');

		socket.on('connect', onConnect);
		// socket.on('disconnect', onDisconnect);
		// socket.on('foo', onFooEvent);

		return () => {
			socket.off('connect', onConnect);
			socket.off('send-message', onDisconnect);
			socket.off('foo', onFooEvent);
		};
	}, []);

	return (
		<div className="flex h-screen justify-center items-center w-screen">
			<p>
				{isConnected}---{fooEvents}
			</p>
			<div className="h-[90%] w-[80%] border-2 border-[#61BAF1] rounded-sm shadow-lg overflow-hidden flex">
				<Sidebar
					handleSelect={(index: number) => {
						setSelectedMessage(index);
					}}
					data={MessageDummyData}
				/>
				<MessageContainer
					name={MessageDummyData[selectedMessage].name}
					avatar={MessageDummyData[selectedMessage].image}
				/>
			</div>
		</div>
	);
}

export default App;
