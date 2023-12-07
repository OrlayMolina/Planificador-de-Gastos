import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpensesList = ({ expenses, setExpenseEdit }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>

      {expenses.map( expense => (
        <Expense
            key={expense.id}
            expense={expense}
            setExpenseEdit={setExpenseEdit} 
        />
      ))}

    </div>
  )
}

ExpensesList.propTypes = {
    expenses: PropTypes.array.isRequired,
    setExpenseEdit: PropTypes.func.isRequired,
};

export default ExpensesList
