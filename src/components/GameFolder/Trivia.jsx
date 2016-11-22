import React, { Component } from 'react';
import style from './Trivia.css';

class Trivia extends Component {
  render(){
    return (
      <div id="question">Question </div>

      <div class="choice-one">Choice 1</div>
      <div class="choice-two">Choice 2</div>
      <div class="choice-three">Choice 3</div>
      <div class="choice-four">Choice 4</div>
      );
  }
}
export default Trivia;
