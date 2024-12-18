/* eslint-disable no-unused-vars */
import React from 'react';

const StarshipCard = ({ starship }) => {
  return (
    <div>
      <h2>{starship.name}</h2>
      <p>Class: {starship.starship_class}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Model: {starship.model}</p>
    </div>
  );
};

export default StarshipCard;