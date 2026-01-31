import React from 'react';

import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ id, text }) => {
  return (
    <p id={id} className={styles.errorText}>
      {text}
    </p>
  );
};

export default ErrorMessage;
