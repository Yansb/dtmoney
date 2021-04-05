import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactioModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setNewTransactionModalOpen(false);
  }
  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    <Dashboard />

    <NewTransactioModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

    <GlobalStyle />
   </>
  );
}

export default App;
