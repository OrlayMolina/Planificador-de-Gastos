import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpensesList = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>

      {expenses.map( expense => (
        <Expense
            key={expense.id}
            expense={expense} 
        />
      ))}

    </div>
  )
}

ExpensesList.propTypes = {
    expenses: PropTypes.array.isRequired,
};

export default ExpensesList
