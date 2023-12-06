import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import IconNewBudget from './img/nuevo-gasto.svg';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewBudget = () => {
    setModal(true);
  }

  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget ? (
        <div className='nuevo-gasto'>
          <img 
            src={IconNewBudget} 
            alt="Icono Nuevo Gasto"
            onClick={handleNewBudget}
          />
        
        </div>
      ) : null }

      {modal && <Modal setModal={setModal}/>}

    </div>
  )
}

export default App
