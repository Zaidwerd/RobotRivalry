import React, { Component } from 'react';
import './AddQuestions.css';

export default class AddQuestion extends Component {

  render() {
    return(
      <container>
        <div className="submit-question">

          <input
            type="text"
            placeholder="Create Question"
            value={this.props.state.newQuestion}
            onChange={this.props.updateNewQuestion}
          />

          <input
            type="text"
            placeholder="Enter correct answer"
            value={this.props.state.newCorrectAnswer}
            onChange={this.props.updateNewCorrectAnswer}
          />

          <input
            type="text"
            placeholder="Enter first answer choice"
            value={this.props.state.newAnswerA}
            onChange={this.props.updateNewAnswerA}
          />

          <input
            type="text"
            placeholder="Enter second answer choice"
            value={this.props.state.answerB}
            onChange={this.props.updateNewAnswerB}
          />

          <input
            type="text"
            placeholder="Enter third answer choice"
            value={this.props.state.newAnswerC}
            onChange={this.props.updateNewAnswerC}
          />

          <input
            type="text"
            placeholder="Enter fourth answer choice"
            value={this.props.state.newAnswerD}
            onChange={this.props.updateNewAnswerD}
          />

          <input
            type="text"
            placeholder="Enter category"
            value={this.props.state.newCategory}
            onChange={this.props.updateNewCategory}
          />

          <input
            type="text"
            placeholder="Enter difficulty"
            value={this.props.state.newDifficulty}
            onChange={this.props.updateNewDifficulty}
          />

          <input
            type="text"
            placeholder="Enter username"
            value={this.props.state.createdBy}
            onChange={this.props.updateCreatedBy}
          />

          <button onClick={this.props.submitQuestion}> Submit Question </button>
        </div>
      </container>
      );
  }
}

