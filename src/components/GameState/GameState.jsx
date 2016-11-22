import React, { Component } from 'react';
import Question from '../Question/question';
import './GameState.css';

class GameState extends Component {
  render() {

    const questions = this.props.questions.map((question, i) => {
      return (
        <Question
          key={i}
          question={questions.question}
          answerA={questions.correct_answer}
          answerB={questions.incorrect_answer[0]}
          answerC={questions.incorrect_answer[1]}
          answerD={questions.incorrect_answer[2]}
        />
        )
    })
    return(
      <container>
        <h2> Scott hello </h2>
        <button onClick={this.props.getQuestions}> Get questions </button>
        {questions}
      </container>
      );
  }
}

export default GameState;
