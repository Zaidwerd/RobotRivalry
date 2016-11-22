import React, { Component } from 'react';
import SignUp from './SignUp.jsx';
import style from './SignUp.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      signUpUserName: '',
      signUpPassword: ''
    };
  }


render() {
  return (
    <div id="container">
    <header>
    <h1>Sign Up</h1>
    </header>
    <SignUp


      />
      </div>
    )
}
}
export default App;

