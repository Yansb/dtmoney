import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactioModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';

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
    <TransactionsProvider>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    <Dashboard />

    <NewTransactioModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

    <GlobalStyle />
   </TransactionsProvider>
  );
}

export default App;
