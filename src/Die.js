import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Die.css';

export default class Die extends Component {
  render() {
    const values = ['one', 'two', 'three', 'four', 'five', 'six'];
    let value = values[this.props.number];

    return (
      <div style={{ margin: '1rem' }} className={this.props.roll && 'rolling'}>
        <FontAwesomeIcon icon={['fas', `dice-${value}`]} className="icon" />
      </div>
    );
  }
}
