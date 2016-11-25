import React, { Component } from 'react';
import '../../../normalize.css';
import style from './Categories.css';

// create a React Component called _App_
class Categories extends Component {

  render(){
    return (
      <div id='container'>

      <div className='main-box'>
        <button
          className='category-box1 box'
          onClick={() => setState({
            value: i
          })
        }>category name</button>
      </div>

      </div>
    );
  }
}
export default Categories;
