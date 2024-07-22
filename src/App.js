// src/App.js
import React from 'react';
import AnimalCard from './AnimalCard';
import './App.css';

const animals = [
  { name: 'Lion', image: '/animalsounds/assets/images/lion.jpeg', sound: '/animalsounds/assets/sounds/lion.mp3' },
  { name: 'Tiger', image: '/animalsounds/assets/images/tiger.jpeg', sound: '/animalsounds/assets/sounds/tiger.mp3' },
  { name: 'cat', image: '/animalsounds/assets/images/cat.jpeg', sound: '/animalsounds/assets/sounds/cat.mp3' },
  { name: 'cow', image: '/animalsounds/assets/images/cow.jpg', sound: '/animalsounds/assets/sounds/cow.mp3' },
  { name: 'dog', image: '/animalsounds/assets/images/dog.jpeg', sound: '/animalsounds/assets/sounds/dog.mp3' },
  { name: 'pig', image: '/animalsounds/assets/images/pig.avif', sound: '/animalsounds/assets/sounds/pig.mp3' },
  { name: 'zebra', image: '/animalsounds/assets/images/zebra.jpeg', sound: '/animalsounds/assets/sounds/zebra.mp3' },
  { name: 'duck', image: '/animalsounds/assets/images/duck.jpeg', sound: '/animalsounds/assets/sounds/duck.mp3' },
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
