import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../Icon/Icon';
import { vehicleEquipmentCategories } from '../../FiltersPanel/constans';
import Category from '../../Category/Category';

import { toggleFavorite } from '../../../redux/favoritesSlice';

import styles from './CamperItem.module.css';
import StyledLink from '../../StyledLink/StyledLink';
import InfoContent from '../../InfoContent/InfoContent';
import Price from '../../Price/Price';

const CamperItem = ({ item }) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(state => state.favorites.ids);
  const isFavorite = favoriteIds.includes(String(item.id));

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
            <button
              type="button"
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              className={`${styles.heartBtn} ${
                isFavorite ? styles.heartBtnActive : ''
              }`}
              onClick={() => dispatch(toggleFavorite(item.id))}
            >
              <Icon
                name={isFavorite ? 'icon-heart-filled' : 'icon-heart'}
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
