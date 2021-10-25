import './App.css';
import React from 'react';
import Wrapper from './Components/Wrapper.js';
import {HashRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
            <Wrapper></Wrapper>
        </div>
      </Router>
  );
}

export default App;
