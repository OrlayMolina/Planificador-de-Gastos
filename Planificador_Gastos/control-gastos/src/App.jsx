import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Modal from './components/Modal';
import ExpensesList from './components/ExpensesList';
import { generateId } from './helpers';
import IconNewBudget from './img/nuevo-gasto.svg';

function App() {

  const initialExpenses = localStorage.getItem('gastos');
  const parsedExpenses = initialExpenses ? JSON.parse(initialExpenses) : [];

  const [expenses, setExpenses] = useState(parsedExpenses);
  const [budget, setBudget] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenseEdit, setExpenseEdit] = useState({});
  const [filter, setFilter] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  

  useEffect(() => {
    if(Object.keys(expenseEdit).length > 0) {
      setModal(true);
  
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [expenseEdit]);

  useEffect(()=>{
    localStorage.setItem('presupuesto', budget ?? 0); 
  },[budget]);  

  useEffect(()=>{
    localStorage.setItem('gastos',JSON.stringify(expenses))
  },[expenses]);

  useEffect(() => {
    if(filter){
      // Find expenses by category
      const expensesFiltered = expenses.filter(expense => expense.category === filter);
      setFilteredExpenses(expensesFiltered);
    }
  }, [filter, expenses]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('presupuesto') ?? 0);

    if(budgetLS > 0) {
      setIsValidBudget(true);
    }

  }, []);

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
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget ? (
        <>
          <main>
            <Filters 
              filter={filter}
              setFilter={setFilter}
            />
            <ExpensesList 
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              filteredExpenses={filteredExpenses}
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
