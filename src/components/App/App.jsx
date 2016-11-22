import React, { Component } from 'react';
import GameState from '../GameState/GameState';
import style from './App.css';
import './normalize.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: {},
      q_correct: 0,
      q_incorrect: 0,
    }
  }

getQuestions() {
  console.log('clicked!');
  fetch(`http://cors.io/?https://www.opentdb.com/api.php?amount=10&type=multiple`)
    .then(r => r.json())
    .then((data) => {
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
          getQuestions={event => this.getQuestions(event)}
        />
      </div>
    );
  }
}

export default App;

