import React from 'react';
import { Link } from 'react-router-dom';

import styles from './StyledLink.module.css';

const StyledLink = ({ text, to, className }) => {
  return (
    <Link to={to} className={`${styles.link} ${className}`}>
      {text}
    </Link>
  );
};

export default StyledLink;
