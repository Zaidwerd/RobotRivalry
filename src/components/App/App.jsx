
import React, { Component } from 'react';
import './../normalize.css';
import style from './App.css';

// import Login from './Login/LogIn.jsx';
// import SignUp from './SignUp/SignUp.jsx';
// import Trivia from './Game/GameFoler/Trivia.jsx';
import GameState from './Game/GameState/GameState.jsx';
// import Categories from './Game/Categories/Categories.jsx';
// import Levels from './Game/Levels/Levels.jsx';
// import Question from './Game/Question/question.jsx';
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
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
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
      answerA: shuffledAnswerArray[0],
      answerB: shuffledAnswerArray[1],
      answerC: shuffledAnswerArray[2],
      answerD: shuffledAnswerArray[3],
      counter: this.state.counter +1,
    })
  };

  nextQuestionA() {
    console.log('clicked');
    console.log('ANSWER A: ', this.state.answerA);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerA === this.state.currentCorrectAnswer) {
      this.setState({q_correct: this.state.q_correct + 1});
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    this.getOneQuestion();
  }

    nextQuestionB() {
    console.log('clicked');
    console.log('ANSWER B: ', this.state.answerB);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerB === this.state.currentCorrectAnswer) {
      this.setState({q_correct: this.state.q_correct + 1});
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    this.getOneQuestion();
  }

    nextQuestionC() {
    console.log('clicked');
    console.log('ANSWER C: ', this.state.answerC);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerC === this.state.currentCorrectAnswer) {
      this.setState({q_correct: this.state.q_correct + 1});
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    this.getOneQuestion();
  }

    nextQuestionD() {
    console.log('clicked');
    console.log('ANSWER D: ', this.state.answerD);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerD === this.state.currentCorrectAnswer) {
      this.setState({q_correct: this.state.q_correct + 1});
    }
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
          answerA={this.state.answerA}
          answerB={this.state.answerB}
          answerC={this.state.answerC}
          answerD={this.state.answerD}
          nextQuestionA={event => this.nextQuestionA(event)}
          nextQuestionB={event => this.nextQuestionB(event)}
          nextQuestionC={event => this.nextQuestionC(event)}
          nextQuestionD={event => this.nextQuestionD(event)}
        />
      </div>
    );
  }
}

export default App;


