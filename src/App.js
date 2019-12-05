import React from 'react';

import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';

import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <About />
      <hr />
      <Education />
    </div>
    
  );
}

export default App;
