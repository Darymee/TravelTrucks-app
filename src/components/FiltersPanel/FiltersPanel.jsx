import React from 'react';
import Icon from '../Icon/Icon';

import styles from './FiltersPanel.module.css';
import { vehicleEquipmentCategories, vehicleTypeCategories } from './constans';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import Button from '../Button/Button';

const FiltersPanel = () => {
  return (
    <div>
      <div className={styles.locationFilter}>
        <label htmlFor="location" className={styles.label}>
          Location
        </label>
        <div className={styles.inputWrapper}>
          <Icon name="icon-location" size={20} className={styles.inputIcon} />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Kyiv, Ukraine"
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.categoryFilterWrapper}>
        <p className={styles.filtersLabel}>Filters</p>
        <CategoryFilter
          label="Vehicle equipment"
          categories={vehicleEquipmentCategories}
        />
        <CategoryFilter
          label="Vehicle type"
          categories={vehicleTypeCategories}
        />
        <Button text="Search" className={styles.searchBtn} />
      </div>
    </div>
  );
};

export default FiltersPanel;
