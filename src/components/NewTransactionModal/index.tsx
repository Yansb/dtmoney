import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './styles';

interface newTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactioModal({isOpen, onRequestClose}: newTransactionModalProps){
  const [type, setType] = useState('deposit');

  return(
    <Modal
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    >
      <button>
        <img src={closeImg} alt="Fechar modal" onClick={onRequestClose} className="react-modal-close" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor"/>

        <TransactionTypeContainer>
          <button onClick={()=> setType("deposit")} type="button">
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </button>
          <button onClick={()=> setType("withdraw")} type="button">
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder='Categoria'/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}