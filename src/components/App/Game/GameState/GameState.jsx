import React, { Component } from 'react';
import style from './GameState.css';
let _ = require('underscore');

class GameState extends Component {
  constructor(props) {
    super();
    this.state = {
      boxPosition: 150,
    }
  }


  render() {
    return(
      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />

        <div className="q-cont">
          <h3 className="theQuestion">{this.props.state.currentQuestion}</h3>
          <button className="q-button" onClick={this.props.nextQuestionA}> {this.props.state.answerA}</button>
          <button className="q-button" onClick={this.props.nextQuestionB}>{this.props.state.answerB}</button>
          <button className="q-button" onClick={this.props.nextQuestionC}>{this.props.state.answerC}</button>
          <button className="q-button" onClick={this.props.nextQuestionD}>{this.props.state.answerD}</button>
          <div className="line"></div>
          <div id="box" style={{left: `${this.state.boxPosition}px`}}></div>
        </div>


        <div id='modal'>

          <div className="ugh-content">
            <div className='hOne'>
              <h1 className="catH1">CHOOSE A CATEGORY</h1>
            </div>
            <div className="box-container">
              <div className='main-box'>
                <button onClick={this.props.getKnow}     className='category-box1 box'>General Knowledge</button>
                <button onClick={this.props.getMusic}    className='category-box2 box'>Music</button>
                <button onClick={this.props.getTV}       className='category-box3 box'>Television</button>
                <button onClick={this.props.getSports}   className='category-box4 box'>Sports</button>
                <button onClick={this.props.getGeo}      className='category-box5 box'>Geography</button>
                <button onClick={this.props.getHistory}  className='category-box6 box'>History</button>
                <button onClick={this.props.getPolitics} className='category-box7 box'>Politics</button>
                <button onClick={this.props.getCelebs}   className='category-box8 box'>Celebrities</button>
                <button onClick={this.props.getAnimals}  className='category-box9 box'>Animals</button>
              </div>
            </div>
          </div>
        </div>

        <div className="complete">
          <h2>YAY! YOU HAVE COMPLETED THE GAME</h2>
          <button className="ccbutton"><a href="/#/stats" className="cclink">STATS</a></button>
          <button className="ccbutton" onClick={event => this.pageReload(event)}>AGAIN</button>
        </div>


      </div>


      );
  }
}

export default GameState;

