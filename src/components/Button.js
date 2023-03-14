import React from 'react';

const Button = ({ onClick, text, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      {text}
    </button>
  );
};

export default Button;
