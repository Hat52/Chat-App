import { MessageInput } from '../../components';

interface IMessageContainer {
	name: string;
	avatar?: any;
	handleMessageSend: (message: string) => void;
	messages: any;
}

export default function MessageContainer({
	name,
	avatar,
	handleMessageSend,
	messages
}: IMessageContainer) {
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
				<h1 className="font-semibold text-[28px] text-[#000000E4]">{name}</h1>
			</div>
			<div className="flex h-[70%] px-5 flex-col py-2 overflow-y-scroll gap-2">
				{messages.map(({ message, time, from }: IMessage) => {
					return (
						<div className={`flex ${from === 'me' ? 'justify-end' : 'justify-left'}`}>
							<Message from={from} time={time} message={message} />
						</div>
					);
				})}
			</div>
			<div className="w-full h-[10%] flex items-center px-5">
				<MessageInput onChange={handleMessageSend} />
			</div>
		</div>
	);
}

interface IMessage {
	from: 'me' | 'other';
	message: string;
	time: string;
}

const Message = ({ from, message, time }: IMessage) => {
	return (
		<div
			className={`${
				from === 'me' ? 'bg-[#62A1DD] text-white' : 'bg-[#EDF0F2] text-[#000000E4]'
			}  p-2 min-w-[100px] max-w-[360px] rounded-[10px] text-left px-2`}>
			<p className="text-[14px]">{message}</p>
			<p className="text-end text-[12px]">{time}</p>
		</div>
	);
};
