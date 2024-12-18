/* eslint-disable no-unused-vars */
import React from 'react';
import StarshipCard from './StarshipCard';

const StarshipList = ({ starships }) => {
  if (starships.length === 0) {
    return <p>No starships found.</p>;
  }

  return (
    <div>
      {starships.map((starship, index) => (
        <StarshipCard key={index} starship={starship} />
      ))}
    </div>
  );
};

export default StarshipList;