//import React from 'react'
import PropTypes from 'prop-types';
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({ expenses, setExpenses, budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidBudget ? (
        <ControlBudget
            expenses={expenses}
            setExpenses={setExpenses}
            budget={budget} 
            setBudget={setBudget}
            isValidBudget={isValidBudget}
        />
      ) : (
        <NewBudget 
            budget={budget}
            setBudget={setBudget}
            isValidBudget={isValidBudget}
            setIsValidBudget={setIsValidBudget}
        />
      )}
      
    </header>
  )
}

Header.propTypes = {
    expenses: PropTypes.array.isRequired,
    budget: PropTypes.number.isRequired,
    setBudget: PropTypes.func.isRequired,
    isValidBudget: PropTypes.bool.isRequired,
    setIsValidBudget: PropTypes.func.isRequired,
    setExpenses: PropTypes.func.isRequired,
  
  };

export default Header
