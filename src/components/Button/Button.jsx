import React from 'react';

import styles from './Button.module.css';

const Button = ({
  text,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
