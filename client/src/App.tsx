import { useEffect, useState } from 'react';
import './App.css';
import { Sidebar, MessageContainer } from './components';
import { socket } from './socket';
import DemoPic from './assets/pic-demo.png';

interface IMessage {
	from: string;
	message: string;

	time: '9:45 PM';
}

interface IMessages {
	name: string;
	image?: any;
	messages: IMessage[];
}

function App() {
	const [selectedMessage, setSelectedMessage] = useState(0);
	const [currentMessage, setCurrentMessage] = useState<IMessages[]>([
		{
			image: DemoPic,
			name: 'Hamza Ali Sender',
			messages: [{ time: '9:45 PM', message: 'Hello Sender', from: 'other' }]
		},
		{
			name: 'Tom',
			messages: [
				{ time: '9:45 PM', message: 'Hello Hamza How are you', from: 'other' },
				{ time: '9:45 PM', message: 'I am good, How are you tom', from: 'me' }
			]
		}
	]);

	const handleMessageSend = (message: string) => {
		socket.emit('send-message', { message, id: selectedMessage });
		const dummyCurrentMessage = [...currentMessage];
		dummyCurrentMessage[selectedMessage].messages.push({ message, from: 'me', time: '9:45 PM' });
		setCurrentMessage([...dummyCurrentMessage]);
	};
	useEffect(() => {
		socket.on('receive-message', (receivedMessage: any) => {
			const dummyCurrentMessage = [...currentMessage];
			console.log(dummyCurrentMessage);
			dummyCurrentMessage[receivedMessage.id].messages.push({
				message: receivedMessage.message,
				from: 'other',
				time: '9:45 PM'
			});
			console.log(dummyCurrentMessage);
			setCurrentMessage([...dummyCurrentMessage]);
		});
	}, [socket]);

	return (
		<div className="flex h-screen justify-center items-center w-screen">
			<div className="h-[90%] w-[80%] border-2 border-[#61BAF1] rounded-sm shadow-lg overflow-hidden flex">
				<Sidebar
					handleSelect={(index: number) => {
						setSelectedMessage(index);
					}}
					data={currentMessage}
				/>
				<MessageContainer
					name={currentMessage[selectedMessage].name}
					avatar={currentMessage[selectedMessage].image}
					handleMessageSend={handleMessageSend}
					messages={currentMessage[selectedMessage].messages}
				/>
			</div>
		</div>
	);
}

export default App;
