import React, { Component } from 'react';
import Login from './LogIn.jsx';
import './../normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {
	constructor() {
		super();
		this.state = {
			login: '',
			password: ''
		}
	}

  render(){
    return (
      <div id='container'>
        <LogIn />
      </div>
    );
  }
}

export default App;