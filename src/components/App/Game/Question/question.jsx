import React, { Component } from 'react';
import '../../../normalize.css';
import style from './question.css';

class Question extends Component {
  render() {
    return(
      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />


        <div className="question-item">
          <h3>{this.props.question}</h3>
          <h4> A: {this.props.answerA}</h4>
          <h4> B: {this.props.answerB}</h4>
          <h4> C: {this.props.answerC}</h4>
          <h4> D: {this.props.answerD}</h4>
        </div>

      </div>  
    );
  }
}

export default Question;
