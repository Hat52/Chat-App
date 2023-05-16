import Emoji from '../../assets/Emoji.svg';
import Attachment from '../../assets/Attach.svg';
import Mic from '../../assets/Mic.svg';

interface IMessageContainer {
	name: string;
	avatar?: any;
}

export default function MessageContainer({ name, avatar }: IMessageContainer) {
	return (
		<div className="relative flex flex-col justify-between h-full w-[77%]">
			<div className="h-[20%] bg-[#F0F4F9] w-full px-5 flex justify-center items-center gap-5 drop-shadow-md">
				{avatar ? (
					<img src={avatar} className="rounded-full w-[40px] h-[40px]" />
				) : (
					<div className="rounded-full w-[40px] bg-[#91D287] text-white h-[40px] text-[14px] flex items-center justify-center font-semibold">
						{name.charAt(0).toUpperCase()}
					</div>
				)}
				<h1 className="font-semibold text-[28px] text-[#000000E4]">Hamza Ali</h1>
			</div>
			<div className="w-full h-[10%] flex items-center px-5">
				<div className="relative w-full px-5 rounded-sm overflow-hidden bg-[#0000000A]">
					<img
						src={Attachment}
						className="absolute left-2 top-1/2 transform -translate-y-1/2"
					/>
					<input
						className="w-full h-[48px] px-5 bg-transparent outline-0"
						value=""
						placeholder="Write a message..."
						onChange={() => {}}
					/>
					<div className="flex absolute right-2 gap-2 top-1/2 transform -translate-y-1/2">
						<img src={Emoji} className="cursor-pointer" />
						<img src={Mic} className="cursor-pointer" />
					</div>
				</div>
			</div>
		</div>
	);
}
