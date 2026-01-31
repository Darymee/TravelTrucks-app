import React from 'react';
import Category from '../Category/Category';

import styles from './Features.module.css';
import { vehicleEquipmentCategories } from '../FiltersPanel/constans';
import { useSelector } from 'react-redux';
import { selectCamperDetails } from '../../redux/campersSlice';
import { useParams } from 'react-router-dom';

const Features = () => {
  const { id } = useParams();
  const camper = useSelector(state => selectCamperDetails(state, id));

  const availableCategories = vehicleEquipmentCategories.filter(c =>
    c.isAvailable(camper)
  );

  console.log(camper);

  return (
    <div className={styles.content}>
      <ul className={styles.categoryList}>
        {availableCategories.map(category => (
          <li key={category.label}>
            <Category category={category} />
          </li>
        ))}
      </ul>
      <div>
        <h3 className={styles.infoTitle}>Vehicle details</h3>
        <div className={styles.tableInfo}>
          <p className={styles.row}>
            <span>Form</span>
            <span>{camper.form}</span>
          </p>
          <p className={styles.row}>
            <span>Length</span>
            <span>{camper.length}</span>
          </p>
          <p className={styles.row}>
            <span>Width</span>
            <span>{camper.width}</span>
          </p>
          <p className={styles.row}>
            <span>Height</span>
            <span>{camper.height}</span>
          </p>
          <p className={styles.row}>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </p>
          <p className={styles.row}>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
