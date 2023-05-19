import MessagePreview from '../MessagePreview';

export default function Sidebar({ handleSelect, data }: any) {
	return (
		<div className="w-[33%] bg-[#EFF3F950] h-full flex flex-col gap-2">
			<div className="bg-gray-100 h-[10%] flex justify-center items-center border-r border-r-[#E1E5EA]">
				<h3 className="font-bold text-xl ">Chats</h3>
			</div>

			<div className="flex flex-col overflow-y-scroll overflow-x-hidden h-[90%]">
				{data.map((messages: any, index: number) => (
					<MessagePreview {...messages} onClick={() => handleSelect(index)} />
				))}
			</div>
		</div>
	);
}
