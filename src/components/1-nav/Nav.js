import React, { useState } from 'react';
import './Nav.scss';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Menu from '../../images/menu.svg';
import Close from '../../images/close.svg';


const Nav = () => {

  const [isActive, handleIsActive] = useState(false);

  const toggleHamburgerMenuIcon = () => {
    const icon = isActive ? Close : Menu
    return (
      <img className='hamburger-menu-icon' 
        src={`${icon}`} 
        onClick={() => handleIsActive(!isActive)}
        alt='Menu icon' />
    )
  }

  const toggleHamburgerMenu = () => {
    const active = isActive ? 'active' :'unactive'
    return (
      <>
        <Fade right cascade delay={100}>
          <nav className={`nav-mobile ${active}`}
            onClick={() => handleIsActive(!isActive)}>
                <Link activeClass='active'
                  className={`${active} nav-mobile-link`}
                  to='aboutmebkgrnd-section'
                  onClick={() => handleIsActive(!isActive)}
                  smooth={true}
                  duration={500}>
                    About Me
                </Link>

                <Link activeClass='active'
                  className={`${active} nav-mobile-link`}
                  to='portfoliobkgrnd-section'
                  smooth={true}
                  onClick={() => handleIsActive(!isActive)}
                  duration={500}>
                    Portfolio
                </Link>

                <Link activeClass='active'
                  className={`${active} nav-mobile-link`}
                  to='contactbkgrnd-section'
                  onClick={() => handleIsActive(!isActive)}
                  smooth={true}
                  duration={500}>
                    Contact
                </Link>
          </nav>
        </Fade>
        <div className='nav-overlay'
          onClick={() => handleIsActive(!isActive)}></div>
      </>
    )
  }

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
      {toggleHamburgerMenuIcon()}
      {isActive && toggleHamburgerMenu()}
    </>
  );
}

export default Nav;