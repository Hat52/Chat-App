import './App.css';
import { Sidebar } from './components';
import DemoPic from './assets/pic-demo.png';

function App() {
	return (
		<div className="flex h-screen justify-center items-center w-screen">
			<div className="h-[90%] w-[80%] border-2 border-[#61BAF1] rounded-sm shadow-lg overflow-hidden">
				<Sidebar />
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between">
					<img src={DemoPic} />
				</div>
			</div>
		</div>
	);
}

export default App;
