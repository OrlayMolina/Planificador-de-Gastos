import PropTypes from 'prop-types';

const ControlBudget = ({ budget }) => {

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
            <span>Disponible: </span> {formatQuantity(0)}
        </p>

        <p>
            <span>Gastado: </span> {formatQuantity(0)}
        </p>
      </div>
    </div>
  )
}

ControlBudget.propTypes = {
    budget: PropTypes.number.isRequired,
  
  };

export default ControlBudget
