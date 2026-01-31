import React from 'react';

import styles from './Button.module.css';

const Button = ({ text, className, type = 'button' }) => {
  return (
    <button type={type} className={`${styles.btn} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
