import React, { Component } from 'react';
import Question from '../Question/question';
import './GameState.css';
let _ = require('underscore');

class GameState extends Component {
  render() {


    return(
      <container>
        <h2> Scott hello </h2>
        <button onClick={this.props.getQuestions}> Get questions </button>
        <h3>{this.props.question}</h3>
        <h5>{this.props.answer1}</h5>
        <h5>{this.props.answer2}</h5>
        <h5>{this.props.answer3}</h5>
        <h5>{this.props.answer4}</h5>
        <button onClick={this.props.nextQuestion}> Next Question </button>
      </container>
      );
  }
}

export default GameState;
