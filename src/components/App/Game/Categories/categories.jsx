import React, { Component } from 'react';
import '../../../normalize.css';
import style from './categories.css';

// create a React Component called _App_
class Categories extends Component {

  render(){
    return (
      <div id='container'>

      <div className='main-box'>
        <button className='category-box1 box'>General Knowledge</button>
        <button className='category-box2 box'>Celebrities</button>
        <button className='category-box3 box'>Television</button>
        <button className='category-box4 box'>History</button>
        <button className='category-box5 box'>Politics</button>
        <button className='category-box6 box'>Geography</button>
        <button className='category-box7 box'>Animals</button>
        <button className='category-box8 box'>Music</button>
        <button className='category-box9 box'>Sports</button>
      </div>

      </div>
    );
  }
}
export default Categories;
