import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ControlBudget = ({ expenses, budget }) => {

    const [available , setAvailable] = useState(0);
    const [spent , setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0);
        const totalAvailable = budget - totalSpent;
    
        setAvailable(totalAvailable);
        setSpent(totalSpent);
    }, [expenses, budget]);

    const formatQuantity = quantity => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <p>Gráfica Aquí</p>

      <div className="contenido-presupuesto">
        <p>
            <span>Presupuesto: </span> {formatQuantity(budget)}
        </p>

        <p>
            <span>Disponible: </span> {formatQuantity(available)}
        </p>

        <p>
            <span>Gastado: </span> {formatQuantity(spent)}
        </p>
      </div>
    </div>
  )
}

ControlBudget.propTypes = {
    expenses: PropTypes.array.isRequired,
    budget: PropTypes.number.isRequired,
  
  };

export default ControlBudget
