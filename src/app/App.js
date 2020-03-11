import React from 'react';
import './App.scss';
import Bkgrnd from '../components/bkgrnd/Bkgrnd';
import MtnImg from '../components/1-mtnimg/MtnImg';
import Name from '../components/1-name/Name';
import Nav from '../components/1-nav/Nav';
import AboutMe from '../components/2-aboutme/AboutMe';
import Portfolio from '../components/3-portfolio/Portfolio';







function App() {
  return (
    <>
      <Nav />
      <Name />
      <MtnImg />
      <Bkgrnd section='mtnbkgrnd-section' />
      <AboutMe />
      <Bkgrnd section='aboutmebkgrnd-section' />
      <Portfolio />
      <Bkgrnd section='portfoliobkgrnd-section' />
      <Bkgrnd section='contactbkgrnd-section' />
    </>
  );
}

export default App;