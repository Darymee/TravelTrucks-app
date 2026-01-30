import { Helmet } from '@dr.pogodin/react-helmet';
import React, { useEffect } from 'react';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import CamperList from '../../components/CamperList/CamperList';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCampers,
  selectCampersItems,
  selectCampersIsLoading,
  selectCampersError,
} from '../../redux/campersSlice';

import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCampersItems);
  const isLoading = useSelector(selectCampersIsLoading);
  const error = useSelector(selectCampersError);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  console.log(items);

  return (
    <>
      <Helmet>
        <title>Catalog | TravelTrucks</title>
        <meta name="description" content="Browse available campers" />
      </Helmet>

      <div className="container">
        <div className={styles.content}>
          <FiltersPanel />
          {isLoading ? (
            <Loader />
          ) : error ? (
            <div>{error}</div>
          ) : (
            <CamperList items={items} />
          )}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
