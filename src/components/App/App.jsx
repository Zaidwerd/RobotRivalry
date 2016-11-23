import React, { Component } from 'react';
import './../normalize.css';
import GameState from '../GameState/GameState';
import style from './App.css';
let _ = require('underscore');

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      q_correct: 0,
      q_incorrect: 0,
      currentQuestion: '',
      currentAnswers: [],
      currentCorrectAnswer: '',
      counter: 0,
    }
  }

  getQuestions() {
    console.log('clicked!');
    fetch(`http://cors.io/?https://www.opentdb.com/api.php?amount=10&type=multiple`)
      .then(r => r.json())
      .then((data) => {

        // for(let i = 0; i < data.results.length; i++) {
        //   console.log(data.results[i].correct_answer)
        // }

        this.setState({
          questions: data.results
        })
        console.log(this.state.questions);
        this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getOneQuestion() {
    let answerArray = [this.state.questions[this.state.counter].correct_answer, this.state.questions[this.state.counter].incorrect_answers[0], this.state.questions[this.state.counter].incorrect_answers[1], this.state.questions[this.state.counter].incorrect_answers[2]];
    let shuffledAnswerArray = _.shuffle(answerArray);
    let questionDirty1 = this.state.questions[this.state.counter].question;
    let questionClean1 = questionDirty1.replace(/&#039;/g , "'");
    let questionClean2 = questionClean1.replace(/&quot;/g , '"');
    console.log(questionClean2);
    this.setState({
      // counter: this.state.counter + 1,
      currentQuestion: questionClean2,
      currentCorrectAnswer: this.state.questions[this.state.counter].correct_answer,
      currentAnswers: shuffledAnswerArray,
    })
  }

  nextQuestion() {
    console.log('counter plus 1');
    this.setState({
      counter: this.state.counter + 1,
    })
    this.getOneQuestion();
  }


  render(){
    return (
      <div id="app-container">

        <h1>hey</h1>

        <GameState
          questions={this.state.questions}
          getQuestions={event => this.getQuestions(event)}
          getOneQuestion={event => this.getOneQuestion(event)}
          question={this.state.currentQuestion}
          answer1={this.state.currentAnswers[0]}
          answer2={this.state.currentAnswers[1]}
          answer3={this.state.currentAnswers[2]}
          answer4={this.state.currentAnswers[3]}
          nextQuestion={event => this.nextQuestion(event)}
        />
      </div>
    );
  }
}

export default App;

