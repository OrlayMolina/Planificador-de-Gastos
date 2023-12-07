import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpensesList = ({ expenses, setExpenseEdit, deleteExpense, filter, filteredExpenses }) => {
  return (
    <div className="listado-gastos contenedor">

      {
        filter ? (
          <>
            <h2>{filteredExpenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>
              {
                filteredExpenses.map( expense => (
                  <Expense
                      key={expense.id}
                      expense={expense}
                      setExpenseEdit={setExpenseEdit} 
                      deleteExpense={deleteExpense}
                  />
                ))
              }
        </>
        ) : (
          <>
            <h2>{expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {expenses.map( expense => (
              <Expense
                  key={expense.id}
                  expense={expense}
                  setExpenseEdit={setExpenseEdit} 
                  deleteExpense={deleteExpense}
              />
            ))}
          </>
        )
      }

    </div>
  )
}

ExpensesList.propTypes = {
    expenses: PropTypes.array.isRequired,
    setExpenseEdit: PropTypes.func.isRequired,
    deleteExpense: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    filteredExpenses: PropTypes.array.isRequired,
};

export default ExpensesList
