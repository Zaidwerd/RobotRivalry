import React, { Component } from 'react';
import Question from '../Question/question';
import './GameState.css';
let _ = require('underscore');

class GameState extends Component {
  render() {

    const questions = this.props.questions.map((question, i) => {

      let answerArray = [question.correct_answer, question.incorrect_answers[0], question.incorrect_answers[1], question.incorrect_answers[2]];
      // var randomUAnswer = Math.floor(Math.round(Math.random() * (answerArray.length - 1)))
      let shuffledAnswerArray = _.shuffle(answerArray);
      console.log(shuffledAnswerArray);

      return (
        <Question
          key={i}
          question={question.question}
          answerA={shuffledAnswerArray[0]}
          answerB={shuffledAnswerArray[1]}
          answerC={shuffledAnswerArray[2]}
          answerD={shuffledAnswerArray[3]}
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
