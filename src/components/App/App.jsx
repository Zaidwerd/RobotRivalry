import React, { Component } from 'react';
import GameState from '../GameState/GameState';
import style from './App.css';
import './normalize.css';

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

      // for(let i = 0; i < data.results.length; i++) {
      //   let allAnswersArray + i = Array.from(
      //     data.results.correct_answer,
      //     data.results.incorrect_answer[0],
      //     data.results.incorrect_answer[1],
      //     data.results.incorrect_answer[2],
      //     );
      // }

      console.log(data.results);
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

