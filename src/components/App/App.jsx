import React, { Component } from 'react';
import './../normalize.css';
import style from './App.css';

// import Login from './Login/LogIn.jsx';
// import SignUp from './SignUp/SignUp.jsx';
// import Trivia from './GameFoler/Trivia.jsx';
import GameState from './Game/GameState/GameState.jsx';
// import Categories from './Categories/Categories.jsx';
// import Levels from './Levels/Levels.jsx';
// import Questions from './Questions/question.jsx';
import StartPage from './StartPage/StartPage.jsx';
// import Stats from './Stats/Stats.jsx';
let _ = require('underscore');

class App extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      q_correct: 0,
      q_incorrect: 0,
      UserName: '',
      PassWord: '',
      signUpUserName: '',
      signUpPassword: '',
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
    // put all answers into one array
    let answerArray = [this.state.questions[this.state.counter].correct_answer, this.state.questions[this.state.counter].incorrect_answers[0], this.state.questions[this.state.counter].incorrect_answers[1], this.state.questions[this.state.counter].incorrect_answers[2]];
    let shuffledAnswerArray = _.shuffle(answerArray);

    // clean question text
    let questionDirty1 = this.state.questions[this.state.counter].question;
    let questionClean1 = questionDirty1.replace(/&#039;/g , "'");
    let questionClean2 = questionClean1.replace(/&quot;/g , '"');

    this.setState({
      currentQuestion: questionClean2,
      currentCorrectAnswer: this.state.questions[this.state.counter].correct_answer,
      currentAnswers: shuffledAnswerArray,
      counter: this.state.counter +1,
    })
  };

  nextQuestion() {
    this.setState({
      counter: this.state.counter + 1,
    })
    this.getOneQuestion();
  }

  updateName(e) {
    this.setState({
      signUpUserName: e.target.value,
    });
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

