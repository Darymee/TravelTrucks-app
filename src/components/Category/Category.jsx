import React from 'react';
import Icon from '../Icon/Icon';

import styles from './Category.module.css';

const Category = ({ category }) => {
  return (
    <div className={styles.category}>
      <Icon name={category.icon} size={20} className={styles.icon} />
      <p className={styles.name}>{category.label}</p>
    </div>
  );
};

export default Category;
