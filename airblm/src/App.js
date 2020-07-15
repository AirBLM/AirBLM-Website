import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className = 'Welcome'>
     <Welcome id='Welcome'></Welcome>
     </div>
     </div>
  );
}

export default App;
