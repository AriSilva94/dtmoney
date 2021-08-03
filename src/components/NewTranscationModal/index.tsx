import { FormEvent, useState } from 'react';
import Modal from 'react-modal'

import incomeImg from './../../assets/income.svg';
import outcomeImg from './../../assets/outcome.svg';
import { Container, TranscationTypeContainer, RadioBox } from './styles'
import closeImg from './../../assets/close.svg'


interface NewTranscationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTranscationModal({ isOpen, onRequestClose }: NewTranscationModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransacation(event: FormEvent) {
    event.preventDefault();

    console.log({
      title,
      value,
      category,
      type
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransacation}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))} />
        <TranscationTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TranscationTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)} />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>

  )
}