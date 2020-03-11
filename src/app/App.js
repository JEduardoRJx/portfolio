import React from 'react';
import './App.scss';
import Bkgrnd from '../components/bkgrnd/Bkgrnd';


function App() {
  return (
    <>
      <Bkgrnd section='mtnbkgrnd-section' />
      <Bkgrnd section='aboutmebkgrnd-section' />
      <Bkgrnd section='portfoliobkgrnd-section' />
      <Bkgrnd section='contactbkgrnd-section' />
    </>
  );
}

export default App;