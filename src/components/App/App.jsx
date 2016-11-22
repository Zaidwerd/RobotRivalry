import React, { Component } from 'react';
import './../normalize.css';
import GameState from '../GameState/GameState';
import style from './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      allAnswers: [],
      q_correct: 0,
      q_incorrect: 0,
    }
  }

getQuestions() {
  console.log('clicked!');
  fetch(`http://cors.io/?https://www.opentdb.com/api.php?amount=10&type=multiple`)
    .then(r => r.json())
    .then((data) => {

      for(let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].correct_answer)
        // console.log(data.results[i].incorrect_answers[0]);
          // let allAnswersArray =
          // Array.from(
          //   data.results[i].correct_answer,
          //   data.results[i].incorrect_answers[0],
          //   data.results[i].incorrect_answers[1],
          //   data.results[i].incorrect_answers[2],
          // );
      }
      // console.log(allAnswersArray);
      this.setState({
        questions: data.results
      })
      console.log(this.state.questions);
    })
    .catch(error => console.log('Error: ', error));
}

  render(){
    return (
      <div id="app-container">

        <h1>hey</h1>

        <GameState
          questions={this.state.questions}
          getQuestions={event => this.getQuestions(event)}
        />
      </div>
    );
  }
}

export default App;

