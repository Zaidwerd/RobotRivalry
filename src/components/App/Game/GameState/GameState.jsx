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

        <button onClick={this.props.nextQuestionA}> {this.props.answerA}</button>
        <button onClick={this.props.nextQuestionB}>{this.props.answerB}</button>
        <button onClick={this.props.nextQuestionC}>{this.props.answerC}</button>
        <button onClick={this.props.nextQuestionD}>{this.props.answerD}</button>
      </container>
      );
  }
}

export default GameState;
