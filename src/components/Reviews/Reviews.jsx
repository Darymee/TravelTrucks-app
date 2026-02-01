import React from 'react';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Review from './Review/Review';
import { selectCamperDetails } from '../../redux/campersSlice';

import styles from './Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const camper = useSelector(state => selectCamperDetails(state, id));

  if (!camper) return null;

  return (
    <>
      {camper.reviews.length ? (
        <ul className={styles.reviews}>
          {camper.reviews.map((review, index) => (
            <li key={index}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews so far.</p>
      )}
    </>
  );
};

export default Reviews;
