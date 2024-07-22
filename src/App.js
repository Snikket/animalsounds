// src/App.js
import React from 'react';
import AnimalCard from './AnimalCard';
import './App.css';

const animals = [
  { name: 'Lion', image: '/assets/images/lion.jpeg', sound: '/assets/sounds/lion.mp3' },
  { name: 'Tiger', image: '/assets/images/tiger.jpeg', sound: '/assets/sounds/tiger.mp3' },
  { name: 'cat', image: '/assets/images/cat.jpeg', sound: '/assets/sounds/cat.mp3' },
  { name: 'cow', image: '/assets/images/cow.jpg', sound: '/assets/sounds/cow.mp3' },
  { name: 'dog', image: '/assets/images/dog.jpeg', sound: '/assets/sounds/dog.mp3' },
  { name: 'pig', image: '/assets/images/pig.avif', sound: '/assets/sounds/pig.mp3' },
  { name: 'zebra', image: '/assets/images/zebra.jpeg', sound: '/assets/sounds/zebra.mp3' },
  { name: 'duck', image: '/assets/images/duck.jpeg', sound: '/assets/sounds/duck.mp3' },
  // Add more animals here
];

const App = () => {
  return (
    <div className="app">
      <h1>Animal Sounds</h1>
      <div className="animal-grid">
        {animals.map((animal, index) => (
          <AnimalCard key={index} {...animal} />
        ))}
      </div>
    </div>
  );
};

export default App;
