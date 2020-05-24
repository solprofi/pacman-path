import React from 'react';

const Button = ({ value, text, handleClick }) => (
  <button
    value={value}
    onClick={handleClick}
  >
    {text}
  </button>
);

export default Button;