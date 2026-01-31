import React from 'react';
import styles from './Price.module.css';

const Price = ({ price }) => {
  return (
    <h2 className={styles.camperPrice}>
      {new Intl.NumberFormat('de-AT', {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: false,
      }).format(price)}
    </h2>
  );
};

export default Price;
