import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import {SliderData} from './data/SliderData'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData}/>
    </>
  );
}

export default App;
