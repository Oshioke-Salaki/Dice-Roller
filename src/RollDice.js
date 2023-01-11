import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolling: false,
      number1: 1,
      number2: 5,
    };
  }

  roll = () => {
    this.setState({
      number1: Math.floor(Math.random() * 6),
      number2: Math.floor(Math.random() * 6),
      rolling: true,
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="rollDice">
        <div className="die">
          <Die number={this.state.number1} roll={this.state.rolling} />
          <Die number={this.state.number2} roll={this.state.rolling} />
        </div>
        <button
          className="btn"
          onClick={this.roll}
          disabled={this.state.rolling}
        >
          {!this.state.rolling ? 'Roll Dice!' : 'Rolling...'}
        </button>
      </div>
    );
  }
}

export default RollDice;
