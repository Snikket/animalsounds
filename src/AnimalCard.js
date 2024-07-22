// src/AnimalCard.js
import React from 'react';

const AnimalCard = ({ name, image, sound }) => {
  const playSound = () => {
    new Audio(sound).play();
  };

  return (
    <div className="animal-card" onClick={playSound}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default AnimalCard;
