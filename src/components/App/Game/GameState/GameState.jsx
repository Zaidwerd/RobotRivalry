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
          <div className="qq">
            <h3 className="theQuestion">{this.props.state.currentQuestion}</h3>
            <button className="q-button" onClick={this.props.nextQuestionA}> {this.props.state.answerA}</button>
            <button className="q-button" onClick={this.props.nextQuestionB}>{this.props.state.answerB}</button>
            <button className="q-button" onClick={this.props.nextQuestionC}>{this.props.state.answerC}</button>
            <button className="q-button" onClick={this.props.nextQuestionD}>{this.props.state.answerD}</button>
          </div>
        </div>


          <div id='modal'>

            <div className="cat-content">

              <div className="ugh-content">

                <div className='hOne'>
                  <h1 className="catH1">CHOOSE A CATEGORY</h1>
                </div>

                <div className="box-container">
                  <div className='main-box'>
                    <button  className="cat-button" onClick={this.props.getKnow}>General Knowledge</button>
                    <button  className="cat-button" onClick={this.props.getMusic}>Music</button>
                    <button  className="cat-button" onClick={this.props.getTV}>Television</button>
                    <button  className="cat-button" onClick={this.props.getSports}>Sports</button>
                    <button  className="cat-button" onClick={this.props.getGeo}>Geography</button>
                    <button  className="cat-button" onClick={this.props.getHistory}>History</button>
                    <button  className="cat-button" onClick={this.props.getPolitics}>Politics</button>
                    <button  className="cat-button" onClick={this.props.getCelebs}>Celebrities</button>
                    <button  className="cat-button" onClick={this.props.getAnimals}>Animals</button>
                  </div>
                </div>



            <div className="complete">
              <div className="cc">
                <h2>YAY! YOU HAVE COMPLETED THE GAME</h2>
                <button className="ccbutton"><a href="/#/stats" className="cclink">STATS</a></button>
                <button className="ccbutton" onClick={event => this.pageReload(event)}>AGAIN</button>
              </div>
            </div>

          </div>
      </div>
    </div>
    </div>
      );
  }
}

export default GameState;

