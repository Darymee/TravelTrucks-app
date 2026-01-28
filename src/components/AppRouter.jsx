import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'));

export function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CamperPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
