import React from 'react';
import Icon from '../../Icon/Icon';
import { vehicleEquipmentCategories } from '../../FiltersPanel/constans';
import Category from '../../Category/Category';

import styles from './CamperItem.module.css';
import StyledLink from '../../StyledLink/StyledLink';

const CamperItem = ({ item }) => {
  const availableCategories = vehicleEquipmentCategories.filter(c =>
    c.isAvailable(item)
  );

  return (
    <div className={styles.camperItem}>
      <div className={styles.imageWrapper}>
        <img
          src={item.gallery[0].thumb}
          alt={`${item.name} picture`}
          className={styles.image}
        />
      </div>
      <div>
        <div className={styles.camperHeader}>
          <h2 className={styles.camperName}>{item.name}</h2>
          <div className={styles.camperHeaderInfo}>
            <p className={styles.camperPrice}>
              {new Intl.NumberFormat('de-AT', {
                style: 'currency',
                currency: 'EUR',
                currencyDisplay: 'symbol',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: false,
              }).format(item.price)}
            </p>
            <button type="button" className={styles.heartBtn}>
              <Icon
                name="icon-heart"
                width={26}
                height={24}
                className={styles.heartBtnIcon}
              />
            </button>
          </div>
        </div>
        <div className={styles.camperBottomInfo}>
          <div className={styles.camperRating}>
            <Icon name="icon-star" size={16} />
            <p>
              {item.rating} ({item.reviews.length} Reviews)
            </p>
          </div>
          <div className={styles.camperLocation}>
            <Icon name="icon-map" size={16} className={styles.iconMap} />
            <p>{item.location}</p>
          </div>
        </div>
        <p className={styles.camperDescription}>{item.description}</p>
        <ul className={styles.categoryList}>
          {availableCategories.map(category => (
            <li key={category.label}>
              <Category category={category} />
            </li>
          ))}
        </ul>
        <StyledLink
          text=" Show more"
          to={`/camper/${item.id}`}
          className={styles.showMoreBtn}
        />
      </div>
    </div>
  );
};

export default CamperItem;
