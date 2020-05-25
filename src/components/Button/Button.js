import React from 'react';
import './Button.scss';

const Button = ({ value, text, handleClick }) => (
  <button
    className='searchButton'
    value={value}
    onClick={handleClick}
  >
    {text}
  </button>
);

export default Button;