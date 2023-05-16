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
			<div className="flex h-[70%] px-5 flex-col py-2 overflow-y-scroll">
				<div className="flex justify-left">
					<p className="p-1 bg-[#EDF0F2] text-[#000000E4] min-w-[90px] rounded-[10px] max-w-max text-left px-2">
						a
					</p>
				</div>
				<div className="flex justify-end">
					<p className="p-1 bg-[#62A1DD] text-white min-w-[90px] rounded-[10px] max-w-max text-left px-2">
						a
					</p>
				</div>
			</div>
			<div className="w-full h-[10%] flex items-center px-5">
				<MessageInput />
			</div>
		</div>
	);
}
