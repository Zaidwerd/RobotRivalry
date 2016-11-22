import React, { Component } from 'react';
import './../normalize.css';
import style from './App.css';

// create a React Component called _App_
class App extends Component {

  render(){
    return (
      <div id='contaier'>
        <Categories />
      </div>
    );
  }
}

export default App;