import React, { Component } from 'react';
import './GameState.css';

class GameState extends Component {
  render() {
    return(
      <container>
        <h2> Scott hello </h2>
        <button onClick={this.props.getQuestions}> Get questions </button>
      </container>
      );
  }
}

export default GameState;
