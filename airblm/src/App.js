import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routes from "./routes";
import useLockBodyScroll from './useLockBodyScroll'
function App() {
  useLockBodyScroll();
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
