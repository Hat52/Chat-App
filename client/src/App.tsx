import './App.css';
import { Sidebar } from './components';

function App() {
	return (
		<div className="flex h-screen justify-center items-center w-screen">
			<div className="h-[90%] w-[80%] border-2 border-[#61BAF1] rounded-sm shadow-lg overflow-hidden">
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
