import React, { Component } from 'react';
import Question from '../Question/question';
import './GameState.css';

class GameState extends Component {
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
        <div>
        <button onClick={this.props.submitQuestion}> Submit Question </button>
        </div>
      </container>
      );
  }
}

export default GameState;

        // <div className="submit-question">
        //   <input type="hidden" value={this.props.question} />
        //   <input type="hidden" value={this.props.correct_answer} />
        //   <input type="hidden" value={this.props.answerA} />
        //   <input type="hidden" value={this.props.answerB} />
        //   <input type="hidden" value={this.props.answerC} />
        //   <input type="hidden" value={this.props.answerD} />
        //   <input type="hidden" value={this.props.category} />
        //   <input type="hidden" value={this.props.difficulty} />
        //   </div>
