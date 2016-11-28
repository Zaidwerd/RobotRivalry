import React, { Component } from 'react';
import Question from '../Question/question';
import style from './GameState.css';
let _ = require('underscore');

class GameState extends Component {
  constructor(props){
    super();

    this.state = {
      questions: [],
      currentQuestion: '',
      currentAnswers: [],
      currentCorrectAnswer: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      counter: 0,
      category: '',
        num_games_played: 0,
        total_num_correct: 0,
        total_num_incorrect: 0,
        num_generalknowledge_played: 0,
        num_generalknowledge_correct: 0,
        num_generalknowledge_incorrect: 0,
        num_music_played: 0,
        num_music_correct: 0,
        num_music_incorrect: 0,
        num_sports_played: 0,
        num_sports_correct: 0,
        num_sports_incorrect: 0,
        num_television_played: 0,
        num_television_correct: 0,
        num_television_incorrect: 0,
        num_geography_played: 0,
        num_geography_correct: 0,
        num_geography_incorrect: 0,
        num_history_played: 0,
        num_history_correct: 0,
        num_history_incorrect: 0,
        num_politics_played: 0,
        num_politics_correct: 0,
        num_politics_incorrect: 0,
        num_celebrities_played: 0,
        num_celebrities_correct: 0,
        num_celebrtities_incorrect: 0,
        num_animals_played: 0,
        num_animals_correct: 0,
        num_animals_incorrect: 0

    };

  }

  getKnow(){
    console.log('General Knowledge');
    fetch('/questions/misc')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getMusic(){
    console.log('music');
    fetch('/questions/music')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getTV(){
    console.log('tv');
    fetch('/questions/tv')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getSports(){
    console.log('sports');
    fetch('/questions/sports')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getGeo(){
    console.log('geography');
    fetch('/questions/geo')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getHistory(){
    console.log('history')
    fetch('/questions/history')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getPolitics(){
    console.log('politics');
    fetch('/questions/politics')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getCelebs(){
    console.log('celebrities');
    fetch('/questions/celebs')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }

  getAnimals(){
    console.log('animals');
    fetch('/questions/animals')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
  }


  getOneQuestion() {
    // put all answers into one array
    let answerArray = [this.state.questions[this.state.counter].answera, this.state.questions[this.state.counter].answerb, this.state.questions[this.state.counter].answerc, this.state.questions[this.state.counter].answerd];
    console.log(answerArray);
    let shuffledAnswerArray = _.shuffle(answerArray);

    this.setState({
      currentQuestion: this.state.questions[this.state.counter].question,
      currentCorrectAnswer: this.state.questions[this.state.counter].correct_answer,
      currentAnswers: shuffledAnswerArray,
      answerA: shuffledAnswerArray[0],
      answerB: shuffledAnswerArray[1],
      answerC: shuffledAnswerArray[2],
      answerD: shuffledAnswerArray[3],
      category: this.state.questions[this.state.counter].category,
      counter: this.state.counter +1,
    })
  };

  correctAnswer() {
    if(this.state.category === 'General Knowledge') {
      console.log('GA matches');
      this.setState({
        num_generalknowledge_correct: this.state.num_generalknowledge_correct + 1,
      })
    } else if(this.state.category === 'Entertainment: Music') {
      console.log('music matches!');
      this.setState({
        num_music_correct: this.state.num_music_correct + 1,
      })
    } else if(this.state.category === 'Sports') {
      console.log('sports matches!');
      this.setState({
        num_sports_correct: this.state.num_sports_correct + 1,
      })
    } else if (this.state.category === 'Entertainment: Television') {
      console.log('tv matches!');
      this.setState({
        num_television_correct: this.state.num_television_correct + 1,
      })
    } else if (this.state.category === 'Geography') {
      console.log('geo matches!');
      this.setState({
        num_geography_correct: this.state.num_geography_correct + 1,
      })
    } else if (this.state.category === 'History') {
      console.log('history matches!');
      this.setState({
        num_history_correct: this.state.num_history_correct + 1,
      })
    } else if (this.state.category === 'Politics') {
      console.log('politics matches!');
      this.setState({
        num_politics_correct: this.state.num_politics_correct + 1,
      })

    } else if (this.state.category === 'Celebrities') {
      console.log('celebrities match!');
      this.setState({
        num_celebrities_correct: this.state.num_celebrities_correct + 1,
      })
    } else if (this.state.category === 'Animals') {
      console.log('Animals match!');
      this.setState({
        num_animals_correct: this.state.num_animals_correct + 1,
      })
    }
  }

  incorrectAnswer() {
    if(this.state.category === 'General Knowledge') {
      console.log('GA matches');
      this.setState({
        num_generalknowledge_incorrect: this.state.num_generalknowledge_incorrect + 1,
      })
    } else if(this.state.category === 'Entertainment: Music') {
      console.log('music matches!');
      this.setState({
        num_music_incorrect: this.state.num_music_incorrect + 1,
      })
    } else if(this.state.category === 'Sports') {
      console.log('sports matches!');
      this.setState({
        num_sports_incorrect: this.state.num_sports_incorrect + 1,
      })
    } else if (this.state.category === 'Entertainment: Television') {
      console.log('tv matches!');
      this.setState({
        num_television_incorrect: this.state.num_television_incorrect + 1,
      })
    } else if (this.state.category === 'Geography') {
      console.log('geo matches!');
      this.setState({
        num_geography_incorrect: this.state.num_geography_incorrect + 1,
      })
    } else if (this.state.category === 'History') {
      console.log('history matches!');
      this.setState({
        num_history_incorrect: this.state.num_history_incorrect + 1,
      })
    } else if (this.state.category === 'Politics') {
      console.log('politics matches!');
      this.setState({
        num_politics_incorrect: this.state.num_politics_incorrect + 1,
      })

    } else if (this.state.category === 'Celebrities') {
      console.log('celebrities match!');
      this.setState({
        num_celebrities_incorrect: this.state.num_celebrities_incorrect + 1,
      })
    } else if (this.state.category === 'Animals') {
      console.log('Animals match!');
      this.setState({
        num_animals_incorrect: this.state.num_animals_incorrect + 1,
      })
    }
  }

  finishGameAll() {
    this.setState({

    })
  }

  finishGame() {
    if(this.state.category === 'General Knowledge') {
      console.log('GA matches');
      this.setState({
        num_generalknowledge_played: this.state.num_generalknowledge_played + 1,
      })
    } else if(this.state.category === 'Entertainment: Music') {
      console.log('music matches!');
      this.setState({
        num_music_played: this.state.num_music_played + 1,
      })
    } else if(this.state.category === 'Sports') {
      console.log('sports matches!');
      this.setState({
        num_sports_played: this.state.num_sports_played + 1,
      })
    } else if (this.state.category === 'Entertainment: Television') {
      console.log('tv matches!');
      this.setState({
        num_television_played: this.state.num_television_played + 1,
      })
    } else if (this.state.category === 'Geography') {
      console.log('geo matches!');
      this.setState({
        num_geography_played: this.state.num_geography_played + 1,
      })
    } else if (this.state.category === 'History') {
      console.log('history matches!');
      this.setState({
        num_history_played: this.state.num_history_played + 1,
      })
    } else if (this.state.category === 'Politics') {
      console.log('politics matches!');
      this.setState({
        num_politics_played: this.state.num_politics_played + 1,
      })

    } else if (this.state.category === 'Celebrities') {
      console.log('celebrities match!');
      this.setState({
        num_celebrities_played: this.state.num_celebrities_played + 1,
      })
    } else if (this.state.category === 'Animals') {
      console.log('Animals match!');
      this.setState({
        num_animals_played: this.state.num_animals_played + 1,
      })
    }
  }


    nextQuestionA() {
    console.log('clicked');
    console.log('ANSWER A: ', this.state.answerA);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerA === this.state.currentCorrectAnswer) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    if(this.state.counter < 10) {
    this.getOneQuestion();
    } else {
      this.finishGame();
      alert('Game done!');
      // location.reload();
    }
  }


    nextQuestionB() {
    console.log('clicked');
    console.log('ANSWER B: ', this.state.answerB);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerB === this.state.currentCorrectAnswer) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    if(this.state.counter < 10) {
    this.getOneQuestion();
    } else {
      this.finishGame();
      alert('Game done!');
      // location.reload();
    }
  }

    nextQuestionC() {
    console.log('clicked');
    console.log('ANSWER C: ', this.state.answerC);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerC === this.state.currentCorrectAnswer) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    if(this.state.counter < 10) {
    this.getOneQuestion();
    } else {
      this.finishGame();
      alert('Game done!');
      // location.reload();
    }
  }

    nextQuestionD() {
    console.log('clicked');
    console.log('ANSWER D: ', this.state.answerD);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerD === this.state.currentCorrectAnswer) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    if(this.state.counter < 10) {
    this.getOneQuestion();
    } else {
      this.finishGame();
      alert('Game done!');
      // location.reload();
    }
  }


  render() {


    return(
      <container>

        <h3>{this.state.currentQuestion}</h3>

        <button onClick={event => this.nextQuestionA(event)}> {this.state.answerA}</button>
        <button onClick={event => this.nextQuestionB(event)}>{this.state.answerB}</button>
        <button onClick={event => this.nextQuestionC(event)}>{this.state.answerC}</button>
        <button onClick={event => this.nextQuestionD(event)}>{this.state.answerD}</button>

      <div id='new-container'>
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />


        <div className="ugh">

          <div className='hOne'>
            <h1 className="catH1">CHOOSE A CATEGORY</h1>
          </div>
          <div className="box-container">
            <div className='main-box'>
              <button onClick={event => this.getKnow(event)}     className='category-box1 box'>General Knowledge</button>
              <button onClick={event => this.getMusic(event)}    className='category-box2 box'>Music</button>
              <button onClick={event => this.getTV(event)}       className='category-box3 box'>Television</button>
              <button onClick={event => this.getSports(event)}   className='category-box4 box'>Sports</button>
              <button onClick={event => this.getGeo(event)}      className='category-box5 box'>Geography</button>
              <button onClick={event => this.getHistory(event)}  className='category-box6 box'>History</button>
              <button onClick={event => this.getPolitics(event)} className='category-box7 box'>Politics</button>
              <button onClick={event => this.getCelebs(event)}   className='category-box8 box'>Celebrities</button>
              <button onClick={event => this.getAnimals(event)}  className='category-box9 box'>Animals</button>
            </div>
          </div>

        </div>
      </div>
      </container>


      );
  }
}

export default GameState;

