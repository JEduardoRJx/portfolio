import React from 'react';
import './AboutMe.scss';
import Fade from 'react-reveal/Fade';
import Headshot from '../../images/headshot.jpg';

const AboutMe = () => {
  return (
    <section className='aboutme-section'>
      <Fade bottom delay={100}>
        <div className='headshot-wrapper'>
          <img className='headshot'
            src={Me}
            alt='J. Eduardo headshot' />
        </div>
    </Fade>
      </section>
  );
}

export default AboutMe;