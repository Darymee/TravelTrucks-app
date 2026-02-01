import React from 'react';

import PropTypes from 'prop-types';

import Icon from '../Icon/Icon';

import styles from './InfoContent.module.css';

const InfoContent = ({ review, rating, location }) => (
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

InfoContent.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
  rating: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default InfoContent;
