import React, { Component } from 'react';
import './App.css';
import RollDice from './RollDice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice />
        <h4>Created by Oshioke Salaki. © 2023</h4>
      </div>
    );
  }
}

export default App;
