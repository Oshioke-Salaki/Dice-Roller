import React, { Component } from 'react';
import Board from './Board';
import './App.css';

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <p>Created by Oshioke Salaki &copy; 2023</p>
      </div>
    );
  }
}

export default App;
