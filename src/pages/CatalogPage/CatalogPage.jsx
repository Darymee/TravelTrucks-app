import { Helmet } from '@dr.pogodin/react-helmet';
import React, { useEffect } from 'react';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import CamperList from '../../components/CamperList/CamperList';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCampers,
  selectCampersItems,
  selectCampersIsLoading,
  selectCampersError,
  selectCampersHasMore,
  loadMoreCampers,
} from '../../redux/campersSlice';

import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCampersItems);
  const isLoading = useSelector(selectCampersIsLoading);
  const error = useSelector(selectCampersError);
  const hasMore = useSelector(selectCampersHasMore);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Catalog | TravelTrucks</title>
        <meta name="description" content="Browse available campers" />
      </Helmet>

      <div className="container">
        <div className={styles.content}>
          <FiltersPanel />

          {isLoading && items.length === 0 ? (
            <Loader />
          ) : error === 'Request failed with status code 404' ? (
            <p className={styles.infoMessage}>
              Nothing was found for your request
            </p>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div>
              <CamperList items={items} />
              {hasMore && (
                <Button
                  className={styles.loadMoreBtn}
                  text={isLoading ? 'Loading...' : 'Load More'}
                  onClick={() => dispatch(loadMoreCampers())}
                  disabled={isLoading}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
