// src/components/ColorGenerator.js
import React, { useState } from 'react';
import './ColorGenerator.css';

function ColorGenerator() {
  const [color, setColor] = useState('#FFFFFF');

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div className="color-generator">
      <div className="color-box" style={{ backgroundColor: color }}>
        <p>{color}</p>
      </div>
      <button id ="button_to_press" onClick={generateRandomColor}>Generate Color</button>
    </div>
  );
}

export default ColorGenerator;
