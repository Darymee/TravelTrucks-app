import React from 'react';

import styles from './InfoContent.module.css';
import Icon from '../Icon/Icon';

const InfoContent = ({ review, rating, location }) => {
  return (
    <div className={styles.camperBottomInfo}>
      <div className={styles.camperRating}>
        <Icon name="icon-star" size={16} className={styles.ratingIcon} />
        <p>
          {rating} ({review.length} Reviews)
        </p>
      </div>
      <div className={styles.camperLocation}>
        <Icon name="icon-map" size={16} className={styles.iconMap} />
        <p>{location}</p>
      </div>
    </div>
  );
};

export default InfoContent;
