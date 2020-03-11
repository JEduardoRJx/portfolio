import React from 'react';
import './App.scss';
import Bkgrnd from '../components/bkgrnd/Bkgrnd';
import MtnImg from '../components/1-mtnimg/MtnImg';
import Name from '../components/1-name/Name';
import Nav from '../components/1-nav/Nav';





function App() {
  return (
    <>
      <Nav />
      <Name />
      <MtnImg />
      <Bkgrnd section='mtnbkgrnd-section' />
      <Bkgrnd section='aboutmebkgrnd-section' />
      <Bkgrnd section='portfoliobkgrnd-section' />
      <Bkgrnd section='contactbkgrnd-section' />
    </>
  );
}

export default App;