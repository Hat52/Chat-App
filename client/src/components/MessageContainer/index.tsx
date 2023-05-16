import { MessageInput } from '../../components';

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
				<h1 className="font-semibold text-[28px] text-[#000000E4]">{name}</h1>
			</div>
			<div className="w-full h-[10%] flex items-center px-5">
				<MessageInput />
			</div>
		</div>
	);
}
