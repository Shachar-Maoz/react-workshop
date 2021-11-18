import React from 'react';

// Generates random colours any time it's called
const randomColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);

// A memoized button with a random background colour
export const Button = ({ onClick, children }) =>
  <button onClick={onClick} style={{ background: randomColor() }}>
    {children}
  </button>
