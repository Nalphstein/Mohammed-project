import Bottombar from './components/Sections/Footer section/Bottombar';
import Contact from './components/Sections/Question section/Contact';
import Faq from './components/Sections/Question section/Faq';
import Intro from './components/Sections/Hero section/Intro';
import Price from './components/Sections/Hero section/Price';
import Topbar from './components/Sections/Hero section/Topbar';
//import React, { useState } from 'react';



function App() {

  return (
  <div className='App'>
    <Topbar/>
    <Intro/> 
    <Price/>
    <Faq/>
    <Contact/>
    <Bottombar/> 
    </div>
  );
}

export default App;
