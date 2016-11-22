import React, { Component } from 'react';
import './../normalize.css';
import style from './categories.css';

// create a React Component called _App_
class Categories extends Component {

  render(){
    return (
      <div id='container'>
      <div className='main-box'>
        <button className='category-box1 box'>category name</div>
        <button className='category-box2 box'>category name</div>
        <button className='category-box3 box'>category name</div>
        <button className='category-box4 box'>category name</div>
        <button className='category-box5 box'>category name</div>
		    <button className='category-box6 box'>category name</div>
        <button className='category-box7 box'>category name</div>
        <button className='category-box8 box'>category name</div> 
        <button className='category-box9 box'>category name</div>       
      </div>
      </div>
    );
  }
}
export default Categories;