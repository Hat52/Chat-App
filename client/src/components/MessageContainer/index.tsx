import DemoPic from '../../assets/pic-demo.png';

export default function MessageContainer() {
	return (
		<div className="relative flex flex-col h-full w-full">
			<div className="h-[20%] bg-[#F0F4F9] w-full px-5 flex justify-center items-center gap-5 drop-shadow-md">
				{false ? (
					<img src={DemoPic} className="rounded-full w-[40px] h-[40px]" />
				) : (
					<div className="rounded-full w-[40px] bg-[#91D287] text-white h-[40px] text-[14px] flex items-center justify-center font-semibold">
						H
					</div>
				)}

				<h1 className="font-semibold text-[28px] text-[#000000E4]">Hamza Ali</h1>
			</div>
		</div>
	);
}
