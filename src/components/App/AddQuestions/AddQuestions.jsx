import React, { Component } from 'react';
import './AddQuestions.css';

export default class AddQuestion extends Component {
    // constructor(state) {
    //   super();
    //   this.state = {
    //     newQuestion: '',
    //     newCorrectAnswer: '',
    //     newAnswerA: '',
    //     newAnswerB: '',
    //     newAnswerC: '',
    //     newAnswerD: '',
    //     newCategory: '',
    //     newDifficulty: '',
    //     createdBy: '',
    //   };
    // }

    // updateNewQuestion(e) {
    //   this.setState({
    //     newQuestion: e.target.value,
    //   })
    // }

    // updateNewCorrectAnswer(e) {
    //   this.setState({
    //     newCorrectAnswer: e.target.value,
    //   })
    // }

    // updateNewAnswerA(e) {
    //   this.setState({
    //     newAnswerA: e.target.value,
    //   })
    // }

    // updateNewAnswerB(e) {
    //   this.setState({
    //     newAnswerB: e.target.value,
    //   })
    // }

    // updateNewAnswerC(e) {
    //   this.setState({
    //     newAnswerC: e.target.value,
    //   })
    // }

    // updateNewAnswerD(e) {
    //   this.setState({
    //     newAnswerD: e.target.value,
    //   })
    // }

    // updateNewCategory(e) {
    //   this.setState({
    //     newCategory: e.target.value,
    //   })
    // }

    // updateNewDifficulty(e) {
    //   this.setState({
    //     newDifficulty: e.target.value,
    //   })
    // }

    // updateCreatedBy(e) {
    //   this.setState({
    //     createdBy: e.target.value,
    //   })
    // }

    // submitQuestion() {
    //   console.log('adding question!');
    //   fetch('/questions', {
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //     method: 'POST',
    //     body: JSON.stringify({
    //       question: this.state.newQuestion,
    //       correct_answer: this.state.newCorrectAnswer,
    //       answerA: this.state.newAnswerA,
    //       answerB: this.state.newAnswerB,
    //       answerC: this.state.newAnswerC,
    //       answerD: this.state.newAnswerD,
    //       category: this.state.newCategory,
    //       difficulty: this.state.newDifficulty,
    //       created_by: this.state.createdBy,
    //     })
    //   })
    //   .then(this.setState({
    //       newQuestion: '',
    //       newCorrectAnswer: '',
    //       newAnswerA: '',
    //       newAnswerB: '',
    //       newAnswerC: '',
    //       newAnswerD: '',
    //       newCategory: '',
    //       newDifficulty: '',
    //       createdBy: '',
    //   }))
    //   .catch(err => console.log(err));
    // }

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

