import React, { Component } from 'react';
import './AddQuestions.css';

export default class AddQuestion extends Component {
    constructor(state) {
      super();
      this.state = {
        newQuestion: '',
        newCorrectAnswer: '',
        newAnswerA: '',
        newAnswerB: '',
        newAnswerC: '',
        newAnswerD: '',
        newCategory: '',
        newDifficulty: '',
        createdBy: '',
      };
    }

    updateNewQuestion(e) {
      this.setState({
        newQuestion: e.target.value,
      })
    }

    updateNewCorrectAnswer(e) {
      this.setState({
        newCorrectAnswer: e.target.value,
      })
    }

    updateNewAnswerA(e) {
      this.setState({
        newAnswerA: e.target.value,
      })
    }

    updateNewAnswerB(e) {
      this.setState({
        newAnswerB: e.target.value,
      })
    }

    updateNewAnswerC(e) {
      this.setState({
        newAnswerC: e.target.value,
      })
    }

    updateNewAnswerD(e) {
      this.setState({
        newAnswerD: e.target.value,
      })
    }

    updateNewCategory(e) {
      this.setState({
        newCategory: e.target.value,
      })
    }

    updateNewDifficulty(e) {
      this.setState({
        newDifficulty: e.target.value,
      })
    }

    updateCreatedBy(e) {
      this.setState({
        createdBy: e.target.value,
      })
    }

    submitQuestion() {
      console.log('adding question!');
      fetch('/questions', {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
          question: this.state.newQuestion,
          correct_answer: this.state.newCorrectAnswer,
          answerA: this.state.newAnswerA,
          answerB: this.state.newAnswerB,
          answerC: this.state.newAnswerC,
          answerD: this.state.newAnswerD,
          category: this.state.newCategory,
          difficulty: this.state.newDifficulty,
          created_by: this.state.createdBy,
        })
      })
      .then(this.setState({
          newQuestion: '',
          newCorrectAnswer: '',
          newAnswerA: '',
          newAnswerB: '',
          newAnswerC: '',
          newAnswerD: '',
          newCategory: '',
          newDifficulty: '',
          createdBy: '',
      }))
      .catch(err => console.log(err));
    }

  render() {
    return(
      <container>
        <div className="submit-question">

          <input
            type="text"
            placeholder="Create Question"
            value={this.props.newQuestion}
            onChange={event => this.updateNewQuestion(event)}
          />

          <input
            type="text"
            placeholder="Enter correct answer"
            value={this.props.newCorrectAnswer}
            onChange={event => this.updateNewCorrectAnswer(event)}
          />

          <input
            type="text"
            placeholder="Enter first answer choice"
            value={this.props.newAnswerA}
            onChange={event => this.updateNewAnswerA(event)}
          />

          <input
            type="text"
            placeholder="Enter second answer choice"
            value={this.props.answerB}
            onChange={event => this.updateNewAnswerB(event)}
          />

          <input
            type="text"
            placeholder="Enter third answer choice"
            value={this.props.newAnswerC}
            onChange={event => this.updateNewAnswerC(event)}
          />

          <input
            type="text"
            placeholder="Enter fourth answer choice"
            value={this.props.newAnswerD}
            onChange={event => this.updateNewAnswerD(event)}
          />

          <input
            type="text"
            placeholder="Enter category"
            value={this.props.newCategory}
            onChange={event => this.updateNewCategory(event)}
          />

          <input
            type="text"
            placeholder="Enter difficulty"
            value={this.props.newDifficulty}
            onChange={event => this.updateNewDifficulty(event)}
          />

          <input
            type="text"
            placeholder="Enter username"
            value={this.props.createdBy}
            onChange={event => this.updateCreatedBy(event)}
          />

          <button onClick={event => this.submitQuestion(event)}> Submit Question </button>
        </div>
      </container>
      );
  }
}

