import Modal from 'react-modal'
import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTranscationModal } from './components/NewTranscationModal';

Modal.setAppElement('#root');

export function App() {
  const [isNewTranscationModalOpen, setIsNewTranscationModalOpen] = useState(false);

  function handleOpenNewTranscationModal() {
    setIsNewTranscationModalOpen(true)
  }

  function handleCloseNewTranscationModal() {
    setIsNewTranscationModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTranscationModal={handleOpenNewTranscationModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTranscationModal
        isOpen={isNewTranscationModalOpen}
        onRequestClose={handleCloseNewTranscationModal}
      />
    </>
  );
}