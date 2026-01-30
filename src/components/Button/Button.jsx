import React from 'react';

import styles from './Button.module.css';

const Button = ({ text, className }) => {
  return (
    <button type="button" className={`${styles.btn} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
