import './App.css'
import Modal from './components/modal'
import { useState } from 'react'

function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      <h1>Modal</h1>

      <button
        onClick={() => {
          setOpenModal(true)
        }}
      >
        Abrir o modal
      </button>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        Conteúdo do modal
      </Modal>
    </div>
  )
}

export default App
