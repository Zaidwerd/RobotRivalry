import React, { Component } from 'react';
import './AddQuestions.css';

export default class AddQuestion extends Component {

  render() {
    return(
      <div id="container">
        <div className="submit-question">
        <div className="submit-form">
        <h1 className="submitQ">SUBMIT A QUESTION</h1>
          <input
            className="newQ"
            type="text"
            placeholder="Create Question"
            value={this.props.state.newQuestion}
            onChange={this.props.updateNewQuestion}
          />

          <input
            className="newQ"
            type="text"
            placeholder="Enter correct answer"
            value={this.props.state.newCorrectAnswer}
            onChange={this.props.updateNewCorrectAnswer}
          />

          <input
            className="newQ"
            type="text"
            placeholder="Enter first answer choice"
            value={this.props.state.newAnswerA}
            onChange={this.props.updateNewAnswerA}
          />

          <input
            className="newQ"
            type="text"
            placeholder="Enter second answer choice"
            value={this.props.state.answerB}
            onChange={this.props.updateNewAnswerB}
          />

          <input
            className="newQ"
            type="text"
            placeholder="Enter third answer choice"
            value={this.props.state.newAnswerC}
            onChange={this.props.updateNewAnswerC}
          />

          <input
            className="newQ"
            type="text"
            placeholder="Enter fourth answer choice"
            value={this.props.state.newAnswerD}
            onChange={this.props.updateNewAnswerD}
          />

          <input
            className="newQ"
            type="text"
            placeholder="Enter category"
            value={this.props.state.newCategory}
            onChange={this.props.updateNewCategory}
          />

          <input
            className="newQ"
            type="text"
            placeholder="Enter difficulty"
            value={this.props.state.newDifficulty}
            onChange={this.props.updateNewDifficulty}
          />

          <input
            className="newQ"
            type="text"
            placeholder="Enter username"
            value={this.props.state.createdBy}
            onChange={this.props.updateCreatedBy}
          />
          <br/>
          <button className="addQButton" onClick={this.props.submitQuestion}> Submit Question </button>
        </div>
        </div>
      </div>
      );
  }
}

