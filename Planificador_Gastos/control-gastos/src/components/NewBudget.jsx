import { useState } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const NewBudget = ({ budget, setBudget, setIsValidBudget  }) => {

    const [message, setMessage] = useState('');

    const handleBudget = e => {
        e.preventDefault();

        if(!budget || budget < 0) {
            setMessage('El presupuesto no es valido, debe ser un número positivo');
            return;
        }

        setMessage('');
        setIsValidBudget(true);
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
            <label htmlFor="">Definir Presupuesto</label>
            <input 
                type="number"
                className="nuevo-presupuesto"
                placeholder="Añade tu presupuesto"
                value={budget || 0  }
                onChange={e => setBudget(Number(e.target.value))}
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
    setIsValidBudget: PropTypes.func.isRequired,
  
  };

export default NewBudget
