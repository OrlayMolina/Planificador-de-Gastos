import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const ControlBudget = ({ expenses, setExpenses, budget, setBudget, setIsValidBudget }) => {

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
        }, 800);

    }, [expenses, budget]);

    const formatQuantity = quantity => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })
    }

    const handleResetApp = () => {
      const result = window.confirm('¿Estás seguro de resetear la app?');
    
      if (result) {
        setExpenses([]);
        setBudget(0);
        setIsValidBudget(false); // Cambia isValidBudget(false) a setIsValidBudget(false)
      }
    }
    

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <CircularProgressbar 
        styles={buildStyles({
          pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
          trailColor: '#F5F5F5',
          textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
        })}
        value={percentage}
        text={`${percentage}% Gastado`}
      />

      <div className="contenido-presupuesto">

        <button 
          className='reset-app'
          type='button'
          onClick={handleResetApp}
        >
          Resetear App
        </button>

        <p>
            <span>Presupuesto: </span> {formatQuantity(budget)}
        </p>

        <p className={`${available < 0 ? 'negativo' : '' }`}>
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
    setExpenses: PropTypes.func.isRequired,
    budget: PropTypes.number.isRequired,
    setBudget: PropTypes.func.isRequired,
    setIsValidBudget: PropTypes.func.isRequired,
  
  };

export default ControlBudget
