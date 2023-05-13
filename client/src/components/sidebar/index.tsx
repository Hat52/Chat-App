import MessagePreview from '../MessagePreview';
import { MessageDummyData } from '../../constants';

export default function Sidebar() {
	return (
		<div className="w-1/4 bg-[#EFF3F950] h-full flex flex-col gap-2">
			<div className="bg-gray-100 h-[10%] flex justify-center items-center">
				<h3 className="font-bold text-xl ">Chats</h3>
			</div>

			<div className="flex flex-col overflow-y-scroll overflow-x-hidden h-[90%]">
				{MessageDummyData.map((messages: any) => (
					<MessagePreview {...messages} />
				))}
			</div>
		</div>
	);
}
