import React, { Component } from 'react';
import Question from '../Question/question';
import style from './GameState.css';

class GameState extends Component {
  constructor(props){
    super();
  }

  getKnow(){
    console.log('General Knowledge');
    fetch('/questions', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        GeneralKnowledge: this.state.GeneralKnowledge
      })
    })
    .catch(error => console.log(error));
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
      })
      .catch(error => console.log('Error: ', error));
  }

  getTV(){
    console.log('tv');
    fetch('/questions', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        Television: this.state.Television
      })
    })
    .catch(error => console.log(error));
  }

  getSports(){
    console.log('sports');
    fetch('/questions', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        Sports: this.state.Sports
      })
    })
    .catch(error => console.log(error));
  }

  getGeo(){
    console.log('geography');
    fetch('/questions', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        Geography: this.state.Geography
      })
    })
    .catch(error => console.log(error));
  }

  getHistory(){
    console.log('history')
    fetch('/questions', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        History: this.state.History
      })
    })
    .catch(error => console.log(error));
  }

  getPolitics(){
    console.log('politics');
    fetch('/questions', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        Politics: this.state.Politics
      })
    })
    .catch(error => console.log(error));
  }

  getCelebs(){
    console.log('celebrities');
    fetch('/questions', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        Celebs: this.state.Celebs
      })
    })
    .catch(error => console.log(error));
  }

  getAnimals(){
    console.log('animals');
    fetch('/questions', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        Animals: this.state.Animals
      })
    })
    .catch(error => console.log(error));
  }



  render() {


    return(
      <container>
        <h2> Scott hello </h2>

        <button onClick={this.props.getQuestions}> Get questions </button>

        <h3>{this.props.question}</h3>

        <button onClick={this.props.nextQuestionA}> {this.props.answerA}</button>
        <button onClick={this.props.nextQuestionB}>{this.props.answerB}</button>
        <button onClick={this.props.nextQuestionC}>{this.props.answerC}</button>
        <button onClick={this.props.nextQuestionD}>{this.props.answerD}</button>

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

