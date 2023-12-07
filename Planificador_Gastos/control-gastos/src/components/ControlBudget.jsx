import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const ControlBudget = ({ expenses, budget }) => {

    const [percentage , setPercentage] = useState(0);
    const [available , setAvailable] = useState(0);
    const [spent , setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0);
        const totalAvailable = budget - totalSpent;

        // Spent Percentage
        const newPercentage = (( (budget - totalAvailable) / budget ) * 100).toFixed(2);
    
        setAvailable(totalAvailable);
        setSpent(totalSpent);
        setTimeout(() => {
            setPercentage(newPercentage);
        }, 1000);

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
      <CircularProgressbar 
        styles={buildStyles({
          pathColor: '#3B82F6',
          trailColor: '#F5F5F5',
          textColor: '#3B82F6'
        })}
        value={percentage}
        text={`${percentage}% Gastado`}
      />

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
