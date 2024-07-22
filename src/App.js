// src/App.js
import React from 'react';
import AnimalCard from './AnimalCard';
import './App.css';

const animals = [
  { name: 'Lion', image: '.animalsounds1/assets/images/lion.jpeg', sound: '.animalsounds1/assets/sounds/lion.mp3' },
  { name: 'Tiger', image: '.animalsounds1/assets/images/tiger.jpeg', sound: '.animalsounds1/assets/sounds/tiger.mp3' },
  { name: 'cat', image: '.animalsounds1/assets/images/cat.jpeg', sound: '.animalsounds1/assets/sounds/cat.mp3' },
  { name: 'cow', image: '.animalsounds1/assets/images/cow.jpg', sound: '.animalsounds1/assets/sounds/cow.mp3' },
  { name: 'dog', image: '.animalsounds1/assets/images/dog.jpeg', sound: '.animalsounds1/assets/sounds/dog.mp3' },
  { name: 'pig', image: '.animalsounds1/assets/images/pig.avif', sound: '.animalsounds1/assets/sounds/pig.mp3' },
  { name: 'zebra', image: '.animalsounds1/assets/images/zebra.jpeg', sound: '.animalsounds1/assets/sounds/zebra.mp3' },
  { name: 'duck', image: '.animalsounds1/assets/images/duck.jpeg', sound: '.animalsounds1/assets/sounds/duck.mp3' },
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
