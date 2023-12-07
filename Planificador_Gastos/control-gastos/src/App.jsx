import { useState, useEffect } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import ExpensesList from './components/ExpensesList';
import { generateId } from './helpers';
import IconNewBudget from './img/nuevo-gasto.svg';

function App() {

  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenseEdit, setExpenseEdit] = useState({});

  useEffect(() => {
    if(Object.keys(expenseEdit).length > 0) {
      setModal(true);
  
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [expenseEdit]);

  const handleNewBudget = () => {
    setModal(true);
    setExpenseEdit({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const saveExpense = expense => {
    if(expense.id){
      //Update
      const expensesUpdated = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState);
      setExpenses(expensesUpdated);
      setExpenseEdit({});
    }else{
      //Create
      expense.id = generateId();
      expense.date = new Date();
      setExpenses([...expenses, expense]);
    }
    
    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  const deleteExpense = id => {
    const expensesUpdated = expenses.filter(expense => expense.id !== id);
    setExpenses(expensesUpdated);
  }

  return (
    <div className={modal ? 'fijar' : '' }>
      <Header 
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget ? (
        <>
          <main>
            <ExpensesList 
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
              src={IconNewBudget} 
              alt="Icono Nuevo Gasto"
              onClick={handleNewBudget}
            />
          
          </div>
        </>
      ) : null }

      {modal && <Modal 
                  setModal={setModal} 
                  animateModal={animateModal}
                  setAnimateModal={setAnimateModal}
                  saveExpense={saveExpense}
                  expenseEdit={expenseEdit}
                  setExpenseEdit={setExpenseEdit}
                />}

    </div>
  )
}

export default App
