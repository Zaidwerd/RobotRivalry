import React, { Component } from 'react';
import '../../../normalize.css';
import style from './categories.css';

// create a React Component called _App_
class Categories extends Component {

  render(){
    return (
      <div id='container'>

      <div className='main-box'>
        <button className='category-box1 box' onClick={() => alert('clicked!')}>category name</button>
      </div>

      </div>
    );
  }
}
export default Categories;
