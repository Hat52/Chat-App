import Emoji from '../../assets/Emoji.svg';
import Attachment from '../../assets/Attach.svg';
import Mic from '../../assets/Mic.svg';
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

interface IMessageInput {
	onChange: (message: string) => void;
}

export default function MessageInput({ onChange }: IMessageInput) {
	const [currentMessage, setCurrentMessage] = useState<string>('');
	const [showEmojie, setShowEmoji] = useState(false);

	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter') {
			onChange(currentMessage);
			setCurrentMessage('');
		}
	};

	return (
		<div className="relative w-full px-5 rounded-sm bg-[#0000000A]">
			<img src={Attachment} className="absolute left-2 top-1/2 transform -translate-y-1/2" />
			<input
				className="w-full h-[48px] px-5 bg-transparent outline-0"
				placeholder="Write a message..."
				onChange={(e) => setCurrentMessage(e.target.value)}
				onKeyDown={handleKeyDown}
				value={currentMessage}
			/>
			{showEmojie ? (
				<div className="absolute bottom-12 right-0">
					<EmojiPicker height="300px" width="300px" />
				</div>
			) : null}
			<div className="flex absolute right-2 gap-2 top-1/2 transform -translate-y-1/2">
				<img src={Emoji} onClick={() => setShowEmoji(!showEmojie)} className="cursor-pointer" />
				<img src={Mic} className="cursor-pointer" />
			</div>
		</div>
	);
}
