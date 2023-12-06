import PropTypes from 'prop-types';
import CloseBtn from '../img/cerrar.svg';

const Modal = ({setModal}) => {

    const hideModal = () => {
        setModal(false);
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
    </div>
  )
}

Modal.propTypes = {
    setModal: PropTypes.func.isRequired,
};

export default Modal
