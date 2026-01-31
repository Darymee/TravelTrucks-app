import React from 'react';
import Icon from '../../Icon/Icon';
import { vehicleEquipmentCategories } from '../../FiltersPanel/constans';
import Category from '../../Category/Category';

import styles from './CamperItem.module.css';
import StyledLink from '../../StyledLink/StyledLink';
import InfoContent from '../../InfoContent/InfoContent';
import Price from '../../Price/Price';

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
            <Price price={item.price} />
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
        <InfoContent
          review={item.reviews}
          rating={item.rating}
          location={item.location}
        />
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
          to={`/catalog/${item.id}`}
          className={styles.showMoreBtn}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
};

export default CamperItem;
