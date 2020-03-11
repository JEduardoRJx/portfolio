import React from 'react';
import './App.scss';
import Bkgrnd from '../components/bkgrnd/Bkgrnd';
import MtnImg from '../components/1-mtnimg/MtnImg';



function App() {
  return (
    <>
      <MtnImg />
      <Bkgrnd section='mtnbkgrnd-section' />
      <Bkgrnd section='aboutmebkgrnd-section' />
      <Bkgrnd section='portfoliobkgrnd-section' />
      <Bkgrnd section='contactbkgrnd-section' />
    </>
  );
}

export default App;