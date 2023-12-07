//import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const Filters = ({ filter, setFilter }) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>

            <label>Filtras Gastos</label>
            <select 
                value={filter}
                onChange={ e => setFilter(e.target.value) }
            >
                <option value="">-- Filtro Vacío --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
        </div>
      </form>
    </div>
  )
}

Filters.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  
  };


export default Filters
