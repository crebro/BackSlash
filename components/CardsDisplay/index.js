import React from 'react';
import FlipMove from 'react-flip-move';

function CardsDisplay({ children }) {
  return <FlipMove className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2' >
      { children }
  </FlipMove>
}

export default CardsDisplay;
