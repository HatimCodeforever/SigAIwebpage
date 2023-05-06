import React from 'react';
import Navbar from './component/Navbar';
import Slider from './component/MySlider';
import './component/ImageAnimation.css'
import BottomSection from './component/BottomSection';
const App = () => {
  return (
    <>
      <Navbar />
      <Slider/>
      <BottomSection/>
    </>
  );
};

export default App
