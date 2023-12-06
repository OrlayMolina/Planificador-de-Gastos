import { useState } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const NewBudget = ({ budget, setBudget }) => {

    const [message, setMessage] = useState('');

    const handleBudget = e => {
        e.preventDefault();

        if(!Number(budget) || budget < 0) {
            setMessage('El presupuesto debe ser un número');
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
            <label htmlFor="">Definir Presupuesto</label>
            <input 
                type="text"
                className="nuevo-presupuesto"
                placeholder="Añade tu presupuesto"
                value={budget}
                onChange={e => setBudget(e.target.value)}
            />
        </div>

        <input type="submit" value="Añadir"/>

        {message &&  <Message type='error'>{message}</Message>}

      </form>
    </div>
  )
}


NewBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    setBudget: PropTypes.func.isRequired,
  
  };

export default NewBudget
