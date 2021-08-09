import Modal from 'react-modal'
import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionsModal } from './components/NewTransactionsModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTranscationModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTranscationModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionsModal
        isOpen={isNewTranscationModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}