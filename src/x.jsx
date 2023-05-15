import React from 'react';
import './FallingCharacters.css';

const characters = "abcdefghijklmnopqrstuvwxyz0123456789"; // The characters that will be falling

const FallingCharacters = () => {
  return (
    <div className="falling-characters-container">
      {Array(50) // Number of characters to be falling
        .fill()
        .map((_, i) => (
          <span
            key={i}
            className="falling-character"
            style={{
              animationDelay: `${Math.random() * 2}s`, // Random delay for each character to start falling
              left: `${Math.random() * 100}%`, // Random horizontal position for each character
            }}
          >
            {characters[Math.floor(Math.random() * characters.length)]} {/* Random character */}
          </span>
        ))}
    </div>
  );
};

export default FallingCharacters;
