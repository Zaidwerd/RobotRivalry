import React, { Component } from 'react';
import GameState from '../GameState/GameState.jsx';
import style from './App.css';
import './normalize.css';

class App extends Component {
  render(){
    return (
      <div id="app-container">
        <h1>hey</h1>
        <GameState />
      </div>
    );
  }
}

export default App;

