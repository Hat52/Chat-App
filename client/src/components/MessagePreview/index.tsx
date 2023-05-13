interface IMessagePreview {
	image?: any;
	name: string;
	message: string;
	newMessageCount: number;
	time: string;
}

export default function MessagePreview({
	image,
	name,
	message,
	newMessageCount,
	time
}: IMessagePreview) {
	return (
		<div className="flex flex-col gap-2 cursor-pointer">
			<div className="flex justify-between items-center border border-gray-200 h-[56px] w-full px-2">
				<div className="flex gap-2 items-center">
					{image ? (
						<img src={image} className="rounded-full w-[32px] h-[32px]" />
					) : (
						<div className="rounded-full w-[32px] bg-[#91D287] text-white h-[32px] text-[14px] flex items-center justify-center font-semibold">
							{name.charAt(0).toUpperCase()}
						</div>
					)}
					<div className="flex flex-col">
						<h6 className="p-0 text-[14px] font-bold text-[#0000009B]">{name}</h6>
						<p className="p-0 text-[12px] -mt-1">{message}</p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-[12px] text-[#0000009B]">{time}</p>
					{newMessageCount ? (
						<p className="rounded-full h-[18px] w-[18px] bg-[#62A1DD] text-[10px] text-white flex items-center justify-center">
							{newMessageCount}
						</p>
					) : null}
				</div>
			</div>
		</div>
	);
}
