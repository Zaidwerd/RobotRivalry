import React, { Component } from 'react';
import SignUp from './LogIn.jsx';
import style from './LogIn.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      LogInUserName: '',
      LogInPassword: ''
    };
  }
render() {
  return (
    <div id="container">
    <header>
    <h1>Log In</h1>
    </header>
    <LogIn


      />
      </div>
    )
}
}
export default App;

