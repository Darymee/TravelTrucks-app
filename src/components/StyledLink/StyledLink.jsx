import React from 'react';
import { Link } from 'react-router-dom';

import styles from './StyledLink.module.css';

const StyledLink = ({ text, to, className = '', target, rel }) => {
  return (
    <Link
      to={to}
      className={`${styles.link} ${className}`}
      target={target}
      rel={rel}
    >
      {text}
    </Link>
  );
};

export default StyledLink;
