import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import CloseBtn from '../img/cerrar.svg';

const Modal = ({setModal, animateModal, setAnimateModal, saveExpense, expenseEdit}) => {

    const [message, setMessage] = useState('');

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if(Object.keys(expenseEdit).length > 0) {
            setName(expenseEdit.name);
            setAmount(expenseEdit.amount);
            setCategory(expenseEdit.category);
            setId(expenseEdit.id);
            setDate(expenseEdit.date);
        }
    }, [expenseEdit]);

    const hideModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([name, amount, category].includes('')) {
            setMessage('Todos los campos son obligatorios');

            setTimeout(() => {
                setMessage('');
            }, 2000);
            return; 
        }

        saveExpense({ name, amount, category, id, date });
    }

    return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
            src={CloseBtn} 
            alt="Cerrar modal" 
            onClick={hideModal}
        />
      </div>

      <form 
        className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>{expenseEdit.name ? 'Editar Gasto' : 'Nuevo Gasto' }</legend>
        {message && <Message type='error'>{message}</Message>}

        <div className='campo'>
            <label htmlFor="nombre">Nombre Gasto</label>

            <input 
                id='nombre'
                type="text" 
                placeholder='Añade el Nombre del Gasto'
                value={name}
                onChange={ e => setName(e.target.value)}
            />
        </div>

        <div className='campo'>
            <label htmlFor="nombre">Monto del Gasto</label>

            <input 
                id='nombre'
                type="number" 
                placeholder='Añade el Nombre del Gasto'
                value={amount}
                onChange={ e => setAmount(Number(e.target.value))}
            />
        </div>


        <div className='campo'>
            <label htmlFor="categoria">Categoria</label>

            <select 
                id="categoria"
                value={category}
                onChange={ e => setCategory(e.target.value)}
            >
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
                
            </select>

        </div>

        <input 
            type="submit" 
            value={expenseEdit.name ? 'Guardar Cambios' : 'Añadir Gasto' }
        />

      </form>
    </div>
  )
}

Modal.propTypes = {
    setModal: PropTypes.func.isRequired,
    animateModal: PropTypes.bool.isRequired,
    setAnimateModal: PropTypes.func.isRequired,
    saveExpense: PropTypes.func.isRequired,
    expenseEdit: PropTypes.object.isRequired
};

export default Modal
