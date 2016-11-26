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
          <input type="text" value={this.props.question} />
          <input type="text" value={this.props.correct_answer} />
          <input type="text" value={this.props.answerA} />
          <input type="text" value={this.props.answerB} />
          <input type="text" value={this.props.answerC} />
          <input type="text" value={this.props.answerD} />
          <input type="text" value={this.props.category} />
          <input type="text" value={this.props.difficulty} />
          <button onClick={this.props.submitQuestion}> Submit Question </button>
        </div>
      </container>
      );
  }
}

