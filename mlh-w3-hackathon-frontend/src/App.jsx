import { useState } from 'react'
import './App.css'

//Page imports
import Header from './sections/Header.jsx';

function App() {

  return (
    <>
      <Header/>
      <HomeBanner/>
    </>
  );
}

function HomeBanner(){
  return (
    <div className="HomeBanner">
      <div className='HomeBannerCTA'>
        <h1 className='HomeBannerText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <button className='HomeBannerButton'>
          Get Started
        </button>
      </div>
    </div>
  );
}



export default App
