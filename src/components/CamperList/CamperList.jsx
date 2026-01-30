import React from 'react';
import CamperItem from './CamperItem/CamperItem';
import styles from './CamperList.module.css';

const CamperList = ({ items }) => {
  return (
    <ul className={styles.camperList}>
      {items.map(camper => (
        <li key={camper.id}>
          <CamperItem item={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
