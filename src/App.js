import React from 'react'
import './App.css';
import titleLogo from './assets/media/eldenring_title.png'

function App() {
  return (
    <div className="App">
      <img className='title-main' src={titleLogo} alt="elden ring title logo" />
      <h1 className='font-face-ers subtitle-main'>archives</h1>
    </div>
  );
}

export default App;
