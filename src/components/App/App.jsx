import React, { Component } from 'react';
import './../normalize.css';
import GameState from './Game/GameState/GameState';
import style from './App.css';
import Login from './Login/LogIn.jsx';
import SignUp from './SignUp/SignUp.jsx';
import Trivia from './GameFoler/Trivia.jsx';
import GameState from './GameState/GameState.jsx';
import Categories from './Categories/Categories.jsx';
import Levels from './Levels/Levels.jsx';
import Questions from './Questions/question.jsx';
import StartPage from './StartPage/StartPage.jsx';
import Stats from './Stats/Stats.jsx';

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

