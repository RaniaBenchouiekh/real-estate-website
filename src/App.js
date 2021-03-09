import React, {useState} from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import {SliderData} from './data/SliderData'
import {InfoDataOne} from './data/InfoData'
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen (!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoDataOne}/>
    </>
  );
}

export default App;
