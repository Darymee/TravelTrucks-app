import { Helmet } from '@dr.pogodin/react-helmet';
import React, { useEffect } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCamperDetails,
  selectCamperDetails,
  selectCamperDetailsLoading,
  selectCamperDetailsError,
} from '../../redux/campersSlice';
import InfoContent from '../../components/InfoContent/InfoContent';
import Price from '../../components/Price/Price';

import styles from './CamperDetailsPage.module.css';
import BookingForm from '../../components/BookingForm/BookingForm';
import Loader from '../../components/Loader/Loader';
import Banner from '../../components/Banner/Banner';

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const camper = useSelector(state => selectCamperDetails(state, id));
  const isLoading = useSelector(selectCamperDetailsLoading);
  const error = useSelector(selectCamperDetailsError);

  useEffect(() => {
    if (!id) return;

    if (!camper) dispatch(getCamperDetails(id));
  }, [dispatch, id, camper]);

  if (isLoading) return <Loader />;

  if (error || !camper) {
    const message =
      error || `There is no information about the camper with ID “${id}`;

    return (
      <div className="container">
        <div className={styles.content}>
          <Link to="/catalog" className={styles.backLink}>
            Back to Catalog
          </Link>

          <h2 className={styles.title}>Data unavailable</h2>
          <p className={styles.notFound}>{message}</p>
          <Banner />
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{camper.name} | TravelTrucks</title>
        <meta
          name="description"
          content={`Rent ${camper.name} in ${camper.location}`}
        />
      </Helmet>
      <div className="container">
        <div className={styles.content}>
          <Link to="/catalog" className={styles.backLink}>
            Back to Catalog
          </Link>
          <h2 className={styles.title}>{camper.name}</h2>
          <div className={styles.infoContainer}>
            <InfoContent
              review={camper.reviews}
              rating={camper.rating}
              location={camper.location}
            />
          </div>
          <div className={styles.priceContainer}>
            <Price price={camper.price} />
          </div>
          <ul className={styles.gallery}>
            {camper.gallery.map((image, index) => (
              <li key={image.thumb} className={styles.galleryItem}>
                <img
                  src={image.thumb}
                  alt={`${camper.name} picture ${index + 1}`}
                  className={styles.galleryImage}
                />
              </li>
            ))}
          </ul>
          <p className={styles.description}>{camper.description}</p>
          <div className={styles.subNav}>
            <NavLink
              to="features"
              end
              className={({ isActive }) =>
                `${styles.subNavLink} ${isActive ? styles.active : ''}`
              }
            >
              Features
            </NavLink>

            <NavLink
              to="reviews"
              className={({ isActive }) =>
                `${styles.subNavLink} ${isActive ? styles.active : ''}`
              }
            >
              Reviews
            </NavLink>
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.left}>
              <Outlet />
            </div>
            <div className={styles.right}>
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CamperDetailsPage;
