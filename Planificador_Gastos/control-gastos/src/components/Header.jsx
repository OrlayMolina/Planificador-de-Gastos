//import React from 'react'
import PropTypes from 'prop-types';
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidBudget ? (
        <ControlBudget
            budget={budget} 
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
    budget: PropTypes.number.isRequired,
    setBudget: PropTypes.func.isRequired,
    isValidBudget: PropTypes.bool.isRequired,
    setIsValidBudget: PropTypes.func.isRequired,
  
  };

export default Header
