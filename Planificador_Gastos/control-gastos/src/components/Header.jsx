//import React from 'react'
import PropTypes from 'prop-types';
import NewBudget from './NewBudget'

const Header = ({ budget, setBudget }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      <NewBudget 
        budget={budget}
        setBudget={setBudget}
      />
    </header>
  )
}

Header.propTypes = {
    budget: PropTypes.int.isRequired,
    setBudget: PropTypes.func.isRequired,
  
  };

export default Header
