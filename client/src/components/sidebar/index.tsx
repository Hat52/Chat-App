import DemoPic from '../../assets/pic-demo.png';

export default function Sidebar() {
	return (
		<div className="w-1/4 bg-[#EFF3F950] h-full flex flex-col gap-2">
			<div className="bg-gray-100 h-[10%] flex justify-center items-center">
				<h3 className="font-bold text-xl ">Chats</h3>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between items-center border border-gray-200 h-[56px] w-full px-2">
					<div className="flex gap-2 items-center">
						<img src={DemoPic} className="rounded-full w-[32px] h-[32px]" />
						<div className="flex flex-col">
							<h6 className="p-0 text-[14px] font-bold text-[#0000009B]">Hamza Ali</h6>
							<p className="p-0 text-[12px] -mt-1">This is a new message</p>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<p className="text-[12px] text-[#0000009B]">4:45PM</p>
						<p className="rounded-full h-[18px] w-[18px] bg-[#62A1DD] text-[10px] text-white flex items-center justify-center">
							1
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
