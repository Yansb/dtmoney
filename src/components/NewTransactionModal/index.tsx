import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface newTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactioModal({isOpen, onRequestClose}: newTransactionModalProps){
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(e:FormEvent){
    e.preventDefault();

    const data = {
      title,
      value,
      category,
      type
    };

    api.post('/transactions', data);
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          placeholder="Título" 
        />
        <input 
          type="number" 
          placeholder="Valor"
          onChange={e => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            onClick={()=> setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
            type="button"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            onClick={()=> setType("withdraw")} 
            isActive={type === "withdraw"}
            activeColor="red"
            type="button"
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder='Categoria'
          value={category}
          onChange={e=> setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}