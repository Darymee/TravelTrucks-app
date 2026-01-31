import React from 'react';
import Icon from '../Icon/Icon';

import styles from './CategoryFilter.module.css';

/**
 * @param {{label: string, categories: Array<{label: string, icon: string, value?: string, filterKey?: string}>,
 * selected: string|string[], multiple?: boolean, onSelect: (category: any)=>void}} props
 */
const CategoryFilter = ({
  label,
  categories,
  selected,
  multiple = false,
  onSelect,
}) => {
  const isSelected = category => {
    const value = category.value ?? category.filterKey ?? category.label;
    return multiple
      ? Array.isArray(selected) && selected.includes(value)
      : selected === value;
  };

  return (
    <>
      <h3 className={styles.label}>{label}</h3>
      <ul className={styles.categoryList}>
        {categories.map(category => {
          const active = isSelected(category);
          return (
            <li key={category.label} className={styles.categoryItem}>
              <button
                type="button"
                className={`${styles.categoryButton} ${active ? styles.active : ''}`}
                onClick={() => onSelect?.(category)}
                aria-pressed={active}
              >
                <Icon name={category.icon} height={28} width={32} />
                {category.label}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoryFilter;
