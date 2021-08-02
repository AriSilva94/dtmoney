import Modal from 'react-modal'


interface NewTranscationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTranscationModal({ isOpen, onRequestClose }: NewTranscationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar Transação</h2>
    </Modal>

  )
}