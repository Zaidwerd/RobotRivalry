import React, { Component } from 'react';
import './../normalize.css';
import GameState from './Game/GameState/GameState';
import style from './App.css';
import StartPage from './Login/LogIn.jsx';
import StartPage from './SignUp/SignUp.jsx';
import StartPage from './GameFoler/Trivia.jsx';
import StartPage from './GameState/GameState.jsx';
import StartPage from './Categories/Categories.jsx';
import StartPage from './Levels/Levels.jsx';
import StartPage from './Questions/question.jsx';
import StartPage from './StartPage/StartPage.jsx';
import StartPage from './Stats/Stats.jsx';

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
      }

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

