import React from 'react';
import FlipMove from 'react-flip-move';

function CardsDisplay({ children }) {
  return <section className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-2'>
    <FlipMove>
        { children }
    </FlipMove>
  </section>
}

export default CardsDisplay;
