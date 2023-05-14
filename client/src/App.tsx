import { useState } from 'react';
import './App.css';
import { Sidebar, MessageContainer } from './components';
import { MessageDummyData } from './constants';

function App() {
	const [selectedMessage, setSelectedMessage] = useState(0);

	return (
		<div className="flex h-screen justify-center items-center w-screen">
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
