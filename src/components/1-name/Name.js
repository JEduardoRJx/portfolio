import React from 'react';
import './Name.scss';
import Fade from 'react-reveal/Fade';

const Name = () => {
  return (
    <section className='name-section'>
      <Fade top>
        <h1 className='name name-text'>
          J. Eduardo Rodriguez
        </h1>
        <h2 className='name name-title'>
          Software Engineer
        </h2>
      </Fade>
    </section>
  );
}

export default Name;