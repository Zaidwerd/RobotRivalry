
import React, { Component } from 'react';
import style from './App.css';
import Login from './LogIn/LogIn.jsx';
import SignUp from './SignUp/SignUp.jsx';
import GameState from './Game/GameState/GameState.jsx';
import Question from './Game/Question/Question.jsx';
import StartPage from './StartPage/StartPage.jsx';
import Stats from './Stats/Stats.jsx';
import Home from './Home.jsx';
import Nav from './Nav.jsx';
import AddQuestions from './AddQuestions/AddQuestions';
import './../normalize.css';


let _ = require('underscore');


class App extends Component {
  constructor(props) {
    super();

    this.state = {
      userFormUsername: '',
      userFormPassword: '',
      userFormFirstName: '',
      userFormLastName: '',
      userFormAge: '',
      userFormGender: '',
      userFormZodiac: '',
      userFormState: '',
      userFormEmail: '',
      image: '',
      questions: [],
      currentQuestion: '',
      currentAnswers: [],
      currentCorrectAnswer: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      counter: 0,
      category: '',
      currentUser: null,
      login: {
        username: '',
        password: '',
        loggedIn: false,
      },
      num_games_played: 0,
      total_num_correct: 0,
      total_num_incorrect: 0,
      num_generalknowledge_played: 0,
      num_generalknowledge_correct: 0,
      num_generalknowledge_incorrect: 0,
      num_music_played: 0,
      num_music_correct: 0,
      num_music_incorrect: 0,
      num_sports_played: 0,
      num_sports_correct: 0,
      num_sports_incorrect: 0,
      num_television_played: 0,
      num_television_correct: 0,
      num_television_incorrect: 0,
      num_geography_played: 0,
      num_geography_correct: 0,
      num_geography_incorrect: 0,
      num_history_played: 0,
      num_history_correct: 0,
      num_history_incorrect: 0,
      num_politics_played: 0,
      num_politics_correct: 0,
      num_politics_incorrect: 0,
      num_celebrities_played: 0,
      num_celebrities_correct: 0,
      num_celebrtities_incorrect: 0,
      num_animals_played: 0,
      num_animals_correct: 0,
      num_animals_incorrect: 0,
      total_q_answered: 0,
      total_q_correct: 0,
      total_q_incorrect: 0,
      total_games: 0,
      percent_q_correct: 0,
      newCorrectAnswer: '',
      newAnswerA: '',
      newAnswerB: '',
      newAnswerC: '',
      newAnswerD: '',
      newCategory: '',
      newDifficulty: '',
      createdBy: '',
    }
  }


  // When a user logs in, pull all of their information in the database and save it in the state.
  // This will enable the game to updatea  users play count / record across the various categories.
    LogIn(a) {
    console.log(a);
    this.setState({
      currentUser: a.id,
      num_games_played: a.num_games_played,
      total_num_correct: a.total_num_correct,
      total_num_incorrect: a.total_num_incorrect,
      num_generalknowledge_played: a.num_generalknowledge_played,
      num_generalknowledge_correct: a.num_generalknowledge_correct,
      num_generalknowledge_incorrect: a.num_generalknowledge_incorrect,
      num_music_played: a.num_music_played,
      num_music_correct: a.num_music_correct,
      num_music_incorrect: a.num_music_incorrect,
      num_sports_played: a.num_sports_played,
      num_sports_correct: a.num_sports_correct,
      num_sports_incorrect: a.num_sports_incorrect,
      num_television_played: a.num_television_played,
      num_television_correct: a.num_television_correct,
      num_television_incorrect: a.num_television_incorrect,
      num_geography_played: a.num_geography_played,
      num_geography_correct: a.num_geography_correct,
      num_geography_incorrect: a.num_geography_incorrect,
      num_history_played: a.num_history_played,
      num_history_correct: a.num_history_correct,
      num_history_incorrect: a.num_history_incorrect,
      num_politics_played: a.num_politics_played,
      num_politics_correct: a.num_politics_correct,
      num_politics_incorrect: a.num_politics_incorrect,
      num_celebrities_played: a.num_celebrities_played,
      num_celebrities_correct: a.num_celebrities_correct,
      num_celebrtities_incorrect: a.num_celebrtities_incorrect,
      num_animals_played: a.num_animals_played,
      num_animals_correct: a.num_animals_correct,
      num_animals_incorrect: a.num_animals_incorrect,
      login: {
        username: a.username,
        password: a.password,
        loggedIn: true,
      },
    });
    document.querySelector('#modal2').style.display = 'block';
  }

  // grabs the password from the login form
  updatePassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value,
        loggedIn: false,
      }
    });
  }
  // grabs the username from the login form
  updateUsername(e) {
    this.setState({
       login: {
        username: e.target.value,
        password: this.state.login.password,
        loggedIn: false,
      }
    });
  }

  // user authorization
  simpleAuth() {
    console.log("got here")
    fetch('/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password,
      }),
    })
    .then(r => r.json())
    .then(this.setState({
      login: {
        username: '',
        password: '',
        loggedIn: false,
      }
    }))
    .then(this.LogIn.bind(this))
    .catch(err => console.log(err));
  }

  // SIGN UP PAGE

// updates each of the sign up fields
  updateFormUsername(e) {
    this.setState({
      userFormUsername: e.target.value,
      image: 'https://robohash.org/' + e.target.value,
    });
  }

  updateFormPassword(e) {
    this.setState({
      userFormPassword: e.target.value,
    });
  }

  updateFormFirstName(e) {
    this.setState({
      userFormFirstName: e.target.value,
    });
  }

  updateFormLastName(e) {
    this.setState({
      userFormLastName: e.target.value,
    });
  }

  updateFormAge(e) {
    this.setState({
      userFormAge: e.target.value,
    });
  }

  updateFormGender(e) {
    this.setState({
      userFormGender: e.target.value,
    });
  }

  updateFormZodiac(e) {
    this.setState({
      userFormZodiac: e.target.value,
    });
  }

  updateFormState(e) {
    this.setState({
      userFormState: e.target.value,
    });
  }

  updateFormEmail(e) {
    this.setState({
      userFormEmail: e.target.value,
    });
  }

  // submits the registration form
  handleFormSubmit() {
    fetch('/users', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.userFormUsername,
        password: this.state.userFormPassword,
        first_name: this.state.userFormFirstName,
        last_name: this.state.userFormLastName,
        age: this.state.userFormAge,
        gender: this.state.userFormGender,
        zodiac: this.state.userFormZodiac,
        state: this.state.userFormState,
        email: this.state.userFormEmail,
        image: this.state.image,
      })
    })
    .then(this.setState({
      userFormUsername: '',
      userFormPassword: '',
      userFormFirstName: '',
      userFormLastName: '',
      userFormAge: '',
      userFormGender: '',
      userFormZodiac: '',
      userFormState: '',
      userFormEmail: '',
      image: '',
    }))
    .catch(err => console.log(err));
  }


  // PROFILE EDIT

   updateFirstName(e) {
    this.setState({
      first_name: e.target.value,
    })
  }
  updateLastName(e) {
    this.setState({
      last_name: e.target.value,
    })
  }
  updateAge(e) {
    this.setState({
      age: e.target.value,
    })
  }
  updateState(e) {
    this.setState({
      state: e.target.value,
    })
  }

  submitEdit() {
      console.log('adding question!');
      fetch('/users', {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'PUT',
        body: JSON.stringify({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          age: this.state.age,
          state: this.state.state,
        })
      })
      .then(this.setState({
        first_name: '',
        last_name: '',
        age: '',
        state: '',
      }))
      .catch(err => console.log(err));
    }

  // will be finished at a later date... :)
  deleteUser() {

  }

  editButton() {
    document.querySelector('.edit-modal').style.display = 'block';
  }

  // GAME LOGIC

  // Pulls ten questions from the Gereral Knowledge category and saves them in state as Questions.
  // Once the category is selected, the category selection box will disappear and the first question
  // will be displayed.
  getKnow(){
    console.log('General Knowledge');
    fetch('/questions/misc')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('.q-cont').style.display = 'block';
  }

  // Pulls ten questions from the Music category and saves them in state as Questions.
  // Once the category is selected, the category selection box will disappear and the first question
  // will be displayed.
  getMusic(){
    console.log('music');
    fetch('/questions/music')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('.q-cont').style.display = 'block';
  }

  // Pulls ten questions from the TV category and saves them in state as Questions.
  // Once the category is selected, the category selection box will disappear and the first question
  // will be displayed.
  getTV(){
    console.log('tv');
    fetch('/questions/tv')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('.q-cont').style.display = 'block';
  }

  // Pulls ten questions from the Sports category and saves them in state as Questions.
  // Once the category is selected, the category selection box will disappear and the first question
  // will be displayed.
  getSports(){
    console.log('sports');
    fetch('/questions/sports')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('.q-cont').style.display = 'block';
  }

  // Pulls ten questions from the Geography category and saves them in state as Questions.
  // Once the category is selected, the category selection box will disappear and the first question
  // will be displayed.
  getGeo(){
    console.log('geography');
    fetch('/questions/geo')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('.q-cont').style.display = 'block';
  }

  // Pulls ten questions from the History category and saves them in state as Questions.
  // Once the category is selected, the category selection box will disappear and the first question
  // will be displayed.
  getHistory(){
    console.log('history')
    fetch('/questions/history')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('.q-cont').style.display = 'block';
  }

  // Pulls ten questions from the Politics category and saves them in state as Questions.
  // Once the category is selected, the category selection box will disappear and the first question
  // will be displayed.
  getPolitics(){
    console.log('politics');
    fetch('/questions/politics')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('.q-cont').style.display = 'block';
  }

  // Pulls ten questions from the Celebrities category and saves them in state as Questions.
  // Once the category is selected, the category selection box will disappear and the first question
  // will be displayed.
  getCelebs(){
    console.log('celebrities');
    fetch('/questions/celebs')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('.q-cont').style.display = 'block';
  }

  // Pulls ten questions from the Animals category and saves them in state as Questions.
  // Once the category is selected, the category selection box will disappear and the first question
  // will be displayed.
  getAnimals(){
    console.log('animals');
    fetch('/questions/animals')
    .then(r => r.json())
    .then((data) => {
      this.setState({
        questions: data
      })
      console.log(this.state.questions);
      this.getOneQuestion();
      })
      .catch(error => console.log('Error: ', error));
      document.querySelector('#modal').style.display = 'none';
      document.querySelector('.q-cont').style.display = 'block';
  }


  // Displays the question and answer choices on the page. The function also shuffles the answer choices
  // so that they do not appear in the same order every time the function is called.
  getOneQuestion() {
    // put all answers into one array
    let answerArray = [this.state.questions[this.state.counter].answera, this.state.questions[this.state.counter].answerb, this.state.questions[this.state.counter].answerc, this.state.questions[this.state.counter].answerd];
    console.log(answerArray);
    let shuffledAnswerArray = _.shuffle(answerArray);

    this.setState({
      currentQuestion: this.state.questions[this.state.counter].question,
      currentCorrectAnswer: this.state.questions[this.state.counter].correct_answer,
      currentAnswers: shuffledAnswerArray,
      answerA: shuffledAnswerArray[0],
      answerB: shuffledAnswerArray[1],
      answerC: shuffledAnswerArray[2],
      answerD: shuffledAnswerArray[3],
      category: this.state.questions[this.state.counter].category,
      counter: this.state.counter +1,
    })
  };

  // If the user answers a question correctly, the total number of questions answered
  // correctly in that category (which is stored in the state) will increase by one.
  correctAnswer() {
    if(this.state.category === 'General Knowledge') {
      console.log('GA matches');
      this.setState({
        num_generalknowledge_correct: this.state.num_generalknowledge_correct + 1,
      })
    } else if(this.state.category === 'Entertainment: Music') {
      console.log('music matches!');
      this.setState({
        num_music_correct: this.state.num_music_correct + 1,
      })
    } else if(this.state.category === 'Sports') {
      console.log('sports matches!');
      this.setState({
        num_sports_correct: this.state.num_sports_correct + 1,
      })
    } else if (this.state.category === 'Entertainment: Television') {
      console.log('tv matches!');
      this.setState({
        num_television_correct: this.state.num_television_correct + 1,
      })
    } else if (this.state.category === 'Geography') {
      console.log('geo matches!');
      this.setState({
        num_geography_correct: this.state.num_geography_correct + 1,
      })
    } else if (this.state.category === 'History') {
      console.log('history matches!');
      this.setState({
        num_history_correct: this.state.num_history_correct + 1,
      })
    } else if (this.state.category === 'Politics') {
      console.log('politics matches!');
      this.setState({
        num_politics_correct: this.state.num_politics_correct + 1,
      })

    } else if (this.state.category === 'Celebrities') {
      console.log('celebrities match!');
      this.setState({
        num_celebrities_correct: this.state.num_celebrities_correct + 1,
      })
    } else if (this.state.category === 'Animals') {
      console.log('Animals match!');
      this.setState({
        num_animals_correct: this.state.num_animals_correct + 1,
      })
    }
  }

  // If the user answers a question incorrectly, the total number of questions answered
  // incorrectly in that category (which is stored in the state) will increase by one.
  incorrectAnswer() {
    if(this.state.category === 'General Knowledge') {
      console.log('GA matches');
      this.setState({
        num_generalknowledge_incorrect: this.state.num_generalknowledge_incorrect + 1,
      })
    } else if(this.state.category === 'Entertainment: Music') {
      console.log('music matches!');
      this.setState({
        num_music_incorrect: this.state.num_music_incorrect + 1,
      })
    } else if(this.state.category === 'Sports') {
      console.log('sports matches!');
      this.setState({
        num_sports_incorrect: this.state.num_sports_incorrect + 1,
      })
    } else if (this.state.category === 'Entertainment: Television') {
      console.log('tv matches!');
      this.setState({
        num_television_incorrect: this.state.num_television_incorrect + 1,
      })
    } else if (this.state.category === 'Geography') {
      console.log('geo matches!');
      this.setState({
        num_geography_incorrect: this.state.num_geography_incorrect + 1,
      })
    } else if (this.state.category === 'History') {
      console.log('history matches!');
      this.setState({
        num_history_incorrect: this.state.num_history_incorrect + 1,
      })
    } else if (this.state.category === 'Politics') {
      console.log('politics matches!');
      this.setState({
        num_politics_incorrect: this.state.num_politics_incorrect + 1,
      })

    } else if (this.state.category === 'Celebrities') {
      console.log('celebrities match!');
      this.setState({
        num_celebrities_incorrect: this.state.num_celebrities_incorrect + 1,
      })
    } else if (this.state.category === 'Animals') {
      console.log('Animals match!');
      this.setState({
        num_animals_incorrect: this.state.num_animals_incorrect + 1,
      })
    }
  }

  // Once the user has answered all ten questions, the total number of games played
  // by that user will increase by one. There is currently a put call that attempts to
  // update the user's database record, but this is currently not working.
  finishGameAll() {
    this.setState({
      num_games_played: this.state.num_games_played + 1,
    });
    console.log(this.state.num_games_played);
    fetch(`/users/update/${this.state.currentUser}`, {
      method: 'put',
      header: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        num_games_played: parseInt(this.state.num_games_played),
      })
    })
  }

  // This function updates the total number of games played in the corresponding category.
  finishGame() {
    if(this.state.category === 'General Knowledge') {
      console.log('GA matches');
      this.setState({
        num_generalknowledge_played: this.state.num_generalknowledge_played + 1,
      })
    } else if(this.state.category === 'Entertainment: Music') {
      console.log('music matches!');
      this.setState({
        num_music_played: this.state.num_music_played + 1,
      })
    } else if(this.state.category === 'Sports') {
      console.log('sports matches!');
      this.setState({
        num_sports_played: this.state.num_sports_played + 1,
      })
    } else if (this.state.category === 'Entertainment: Television') {
      console.log('tv matches!');
      this.setState({
        num_television_played: this.state.num_television_played + 1,
      })
    } else if (this.state.category === 'Geography') {
      console.log('geo matches!');
      this.setState({
        num_geography_played: this.state.num_geography_played + 1,
      })
    } else if (this.state.category === 'History') {
      console.log('history matches!');
      this.setState({
        num_history_played: this.state.num_history_played + 1,
      })
    } else if (this.state.category === 'Politics') {
      console.log('politics matches!');
      this.setState({
        num_politics_played: this.state.num_politics_played + 1,
      })

    } else if (this.state.category === 'Celebrities') {
      console.log('celebrities match!');
      this.setState({
        num_celebrities_played: this.state.num_celebrities_played + 1,
      })
    } else if (this.state.category === 'Animals') {
      console.log('Animals match!');
      this.setState({
        num_animals_played: this.state.num_animals_played + 1,
      })
    }
  }

    // When the user clicks on option A, if it is the correct answer, the correctAnswer function
    // will fire. If it is the incorrect answer, the incorrectAnswer function will fire. It will also
    // increase the question counter by 1. If ten questions have been asked, the finishGame functions wil;
    // fire and the counter will be reset to 0.
    nextQuestionA() {
    console.log('clicked');
    console.log('ANSWER A: ', this.state.answerA);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerA === this.state.currentCorrectAnswer) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    if(this.state.counter < 10) {
    this.getOneQuestion();
    } else {
      this.setState({
        counter: 0,
      })
      this.finishGame();
      this.finishGameAll();
      alert('Game done!');
      // location.reload();
    }
  }

    // When the user clicks on option B, if it is the correct answer, the correctAnswer function
    // will fire. If it is the incorrect answer, the incorrectAnswer function will fire. It will also
    // increase the question counter by 1. If ten questions have been asked, the finishGame functions wil;
    // fire and the counter will be reset to 0.
    nextQuestionB() {
    console.log('clicked');
    console.log('ANSWER B: ', this.state.answerB);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerB === this.state.currentCorrectAnswer) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    if(this.state.counter < 10) {
    this.getOneQuestion();
    } else {
      this.setState({
        counter: 0,
      })
      this.finishGame();
      this.finishGameAll();
      alert('Game done!');
      // location.reload();
    }
  }

    // When the user clicks on option C, if it is the correct answer, the correctAnswer function
    // will fire. If it is the incorrect answer, the incorrectAnswer function will fire. It will also
    // increase the question counter by 1. If ten questions have been asked, the finishGame functions wil;
    // fire and the counter will be reset to 0.
    nextQuestionC() {
    console.log('clicked');
    console.log('ANSWER C: ', this.state.answerC);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerC === this.state.currentCorrectAnswer) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    if(this.state.counter < 10) {
    this.getOneQuestion();
    } else {
      this.setState({
        counter: 0,
      })
      this.finishGame();
      this.finishGameAll();
      alert('Game done!');
      // location.reload();
    }
  }

    // When the user clicks on option D, if it is the correct answer, the correctAnswer function
    // will fire. If it is the incorrect answer, the incorrectAnswer function will fire. It will also
    // increase the question counter by 1. If ten questions have been asked, the finishGame functions wil;
    // fire and the counter will be reset to 0.
    nextQuestionD() {
    console.log('clicked');
    console.log('ANSWER D: ', this.state.answerD);
    console.log('CORRECT ANSWER: ', this.state.currentCorrectAnswer);
    if(this.state.answerD === this.state.currentCorrectAnswer) {
      this.correctAnswer();
    } else {
      this.incorrectAnswer();
    }
    this.setState({
      counter: this.state.counter + 1,
    })
    if(this.state.counter < 10) {
    this.getOneQuestion();
    } else {
      // alert('Game done!');
      this.setState({
        counter: 0,
      })
      document.querySelector('.q-cont').style.display = 'none';
      document.querySelector('.complete').style.display = 'block';
      location.reload();
      this.finishGame();
      this.finishGameAll();
      alert('Game done!');
      // location.reload();
    }
  }

  // This updates the add question form so that users can submit their own questions!

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



  render(){
    return (
      <div id="app-container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />

        <Nav />


        {this.props.children && React.cloneElement(this.props.children,{
          state: this.state,
          updatePassword: (event => this.updatePassword(event)),
          updateUsername: (event => this.updateUsername(event)),
          simpleAuth: (() => this.simpleAuth()),
          updateFormUsername: (event => this.updateFormUsername(event)),
          updateFormPassword: (event => this.updateFormPassword(event)),
          updateFormFirstName: (event => this.updateFormFirstName(event)),
          updateFormLastName: (event => this.updateFormLastName(event)),
          updateFormAge: (event => this.updateFormAge(event)),
          updateFormGender: (event => this.updateFormGender(event)),
          updateFormZodiac: (event => this.updateFormZodiac(event)),
          updateFormState: (event => this.updateFormState(event)),
          updateFormEmail: (event => this.updateFormEmail(event)),
          handleFormSubmit: (event => this.handleFormSubmit(event)),
          updateFirstName: (event => this.updateFirstName(event)),
          updateLastName: (event => this.updateLastName(event)),
          updateAge: (event => this.updateAge(event)),
          updateState: (event => this.updateState(event)),
          submitEdit: (() => this.submitEdit()),
          getKnow: (() => this.getKnow()),
          getMusic: (() => this.getMusic()),
          getTV: (() => this.getTV()),
          getSports: (() => this.getSports()),
          getGeo: (() => this.getGeo()),
          getHistory: (() => this.getHistory()),
          getPolitics: (() => this.getPolitics()),
          getCelebs: (() => this.getCelebs()),
          getAnimals: (() => this.getAnimals()),
          getOneQuestion: (() => this.getOneQuestion()),
          correctAnswer: (() => this.correctAnswer()),
          incorrectAnswer: (() => this.incorrectAnswer()),
          finishGameAll: (() => this.finishGameAll()),
          finishGame: (() => this.finishGame()),
          nextQuestionA: (() => this.nextQuestionA()),
          nextQuestionB: (() => this.nextQuestionB()),
          nextQuestionC: (() => this.nextQuestionC()),
          nextQuestionD: (() => this.nextQuestionD()),
          updateNewQuestion: (() => this.updateNewQuestion()),
          updateNewCorrectAnswer: (() => this.updateNewCorrectAnswer()),
          updateNewAnswerA: (() => this.updateNewAnswerA()),
          updateNewAnswerB: (() => this.updateNewAnswerB()),
          updateNewAnswerC: (() => this.updateNewAnswerC()),
          updateNewAnswerD: (() => this.updateNewAnswerD()),
          updateNewCategory: (() => this.updateNewCategory()),
          updateNewDifficulty: (() => this.updateNewDifficulty()),
          updateCreateBy: (() => this.updateCreatedBy()),
          submitQuestion: (() => this.submitQuestion()),
          editButton: (() => this.editButton()),

        })}

    </div>
    );
  }
};

export default App;


