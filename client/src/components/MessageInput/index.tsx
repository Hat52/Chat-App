import Emoji from '../../assets/Emoji.svg';
import Attachment from '../../assets/Attach.svg';
import Mic from '../../assets/Mic.svg';

export default function MessageInput() {
	return (
		<div className="relative w-full px-5 rounded-sm overflow-hidden bg-[#0000000A]">
			<img src={Attachment} className="absolute left-2 top-1/2 transform -translate-y-1/2" />
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
	);
}
