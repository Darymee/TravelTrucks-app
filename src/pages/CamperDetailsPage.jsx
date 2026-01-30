import React from 'react';

const CamperDetailsPage = ({ camper }) => {
  return (
    <>
      <Helmet>
        <title>{camper.name} | TravelTrucks</title>
        <meta
          name="description"
          content={`Rent ${camper.name} in ${camper.location}`}
        />
      </Helmet>
      {/* page content */}
    </>
  );
};

export default CamperDetailsPage;
