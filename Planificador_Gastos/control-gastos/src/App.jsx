import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import { generateId } from './helpers';
import IconNewBudget from './img/nuevo-gasto.svg';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const handleNewBudget = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const saveExpense = expense => {
    expense.id = generateId();
    setExpenses([...expenses, expense]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
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

      {modal && <Modal 
                  setModal={setModal} 
                  animateModal={animateModal}
                  setAnimateModal={setAnimateModal}
                  saveExpense={saveExpense}
                />}

    </div>
  )
}

export default App
