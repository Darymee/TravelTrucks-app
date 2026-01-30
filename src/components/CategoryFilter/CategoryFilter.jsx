import React from 'react';
import Icon from '../Icon/Icon';

import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ label, categories }) => {
  return (
    <>
      <h3 className={styles.label}>{label}</h3>
      <ul className={styles.categoryList}>
        {categories.map(category => (
          <li key={category.label} className={styles.categoryItem}>
            <button type="button" className={styles.categoryButton}>
              <Icon name={category.icon} height={28} width={32} />
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryFilter;
