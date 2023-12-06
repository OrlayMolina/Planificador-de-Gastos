import PropTypes from 'prop-types';
import CloseBtn from '../img/cerrar.svg';

const Modal = ({setModal, animateModal, setAnimateModal}) => {

    const hideModal = () => {
        setAnimateModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
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

      <form className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>

        <div className='campo'>
            <label htmlFor="nombre">Nombre Gasto</label>

            <input 
                id='nombre'
                type="text" 
                placeholder='Añade el Nombre del Gasto'
            />
        </div>

        <div className='campo'>
            <label htmlFor="nombre">Cantidad</label>

            <input 
                id='nombre'
                type="text" 
                placeholder='Añade el Nombre del Gasto'
            />
        </div>


        <div className='campo'>
            <label htmlFor="categoria">Nombre Gasto</label>

            <select 
                id="categoria"
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
            value="Añadir Gasto"
        />

      </form>
    </div>
  )
}

Modal.propTypes = {
    setModal: PropTypes.func.isRequired,
    animateModal: PropTypes.bool.isRequired,
    setAnimateModal: PropTypes.func.isRequired,
};

export default Modal
