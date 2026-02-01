import React from 'react';

import { ClipLoader } from 'react-spinners';

import styles from './Loader.module.css';

const Loader = () => (
  <ClipLoader
    className={styles.loader}
    size={80}
    aria-label="Loading Spinner"
    data-testid="loader"
    color="#e44848"
  />
);

export default Loader;
