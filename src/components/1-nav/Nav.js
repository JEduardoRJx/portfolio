import React, { useState } from 'react';
import './Nav.scss';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Menu from '../../images/menu.svg';
import Close from '../../images/close.svg';


const Nav = () => {

  const [isActive, handleIsActive] = useState(false);



  return (
    <>
      <Fade top cascade delay={500}>
        <nav className='nav-desktop'>
          <Link activeClass='active'
            className='link-nav'
            to='aboutmebkgrnd-section'
            smooth={true}
            duration={500}>
              About Me
          </Link>

          <Link activeClass='active'
            className='link-nav'
            to='portfoliobkgrnd-section'
            smooth={true}
            duration={500}>
              Portfolio
          </Link>

          <Link activeClass='active'
            className='link-nav'
            to='contactbkgrnd-section'
            smooth={true}
            duration={500}>
              Contact
          </Link>
        </nav>
      </Fade>
    </>
  );
}

export default Nav;