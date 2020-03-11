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

        <div className='text-wrapper'>
          <p className='text'>
            Originally from Mexico, I’m a Software Engineer with a passion to create, design, and build eye-catching applications. My background helping immigrants and other under-served populations during my time at Denver Public Library made me realize we can create friendlier, more accessible, and easier to use applications. I graduated from Turing School of Software and Design with an emphasis on Front-End Engineering and I strive to make a positive impact by solving challenging problems.
          </p>
        </div>
    </Fade>
      </section>
  );
}

export default AboutMe;