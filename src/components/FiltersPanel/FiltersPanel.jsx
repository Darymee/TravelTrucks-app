import React, { useMemo } from 'react';
import Icon from '../Icon/Icon';

import styles from './FiltersPanel.module.css';
import { vehicleEquipmentCategories, vehicleTypeCategories } from './constans';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import Button from '../Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { setForm, setLocation, toggleFeature } from '../../redux/filtersSlice';
import { getCampers, resetSearchResults } from '../../redux/campersSlice';

const FiltersPanel = () => {
  const dispatch = useDispatch();
  const { location, form, features } = useSelector(state => state.filters);

  const selectedFeatures = useMemo(
    () => Object.keys(features).filter(k => features[k]),
    [features]
  );

  const handleSearch = () => {
    // 1) Скидаємо попередні результати
    dispatch(resetSearchResults());

    // 2) Відправляємо запит з параметрами (бекенд може ігнорувати, але у thunk є client-side фільтрація)
    const params = {
      location: location?.trim() || undefined,
      form: form || undefined,
      ...Object.fromEntries(
        Object.entries(features)
          .filter(([, v]) => v)
          .map(([k]) => [k, true])
      ),
    };

    dispatch(getCampers(params));
  };

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
            value={location}
            onChange={e => dispatch(setLocation(e.target.value))}
          />
        </div>
      </div>
      <div className={styles.categoryFilterWrapper}>
        <p className={styles.filtersLabel}>Filters</p>
        <CategoryFilter
          label="Vehicle equipment"
          categories={vehicleEquipmentCategories}
          multiple
          selected={selectedFeatures}
          onSelect={category => dispatch(toggleFeature(category.filterKey))}
        />
        <CategoryFilter
          label="Vehicle type"
          categories={vehicleTypeCategories}
          selected={form}
          onSelect={category =>
            dispatch(setForm(form === category.value ? '' : category.value))
          }
        />
        <Button text="Search" className={styles.searchBtn} onClick={handleSearch} />
      </div>
    </div>
  );
};

export default FiltersPanel;
