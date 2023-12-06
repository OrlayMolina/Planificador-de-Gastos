//import { useState } from 'react'
import PropTypes from 'prop-types';

const Message = ({ children, type }) => {
  return (
    <div className={`alerta ${type}`}>
      {children}
    </div>
  )
}

Message.propTypes = {
    children: PropTypes.element.isRequired,
    type: PropTypes.string.isRequired,
}; 

export default Message
