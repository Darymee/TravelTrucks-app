import { Helmet } from '@dr.pogodin/react-helmet';
import React from 'react';
import Hero from '../components/Hero/Hero';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>TravelTrucks | Home</title>
        <meta name="description" content="Rent a camper and travel freely" />
      </Helmet>
      <Hero />
    </>
  );
};

export default HomePage;
