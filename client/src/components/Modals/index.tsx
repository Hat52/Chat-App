import Modal from 'react-modal';

type TModals = {
	isOpen: boolean;
	onClose: () => void;
	styles?: any;
};

Modal.setAppElement('#root');

export default function CreateModal({ isOpen, onClose, styles }: TModals) {
	return (
		<div>
			<Modal
				isOpen={isOpen}
				onRequestClose={onClose}
				style={{
					content: {
						width: '40%',
						height: '50%',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)'
					},
					overlay: {
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(255, 255, 255, 0.75)'
					}
				}}
				contentLabel="Example Modal">
				Modal
			</Modal>
		</div>
	);
}
