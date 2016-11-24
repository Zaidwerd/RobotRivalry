import React, { Component } from 'react';
import './starterBG.jpg';
import style from './StartPage.css';
import { Link } from 'react-router';
import Categories from '../Game/Categories/categories.jsx';


class StartPage extends Component {
  render(){
    return (

      <div className="container">

      <div className="bg">
      <div className="robotrivalry">
        <Link to="/categories">Go To Sample</Link>
      </div>

      <div className="cookingmama">cookingmama coming soon</div>
      <div className="pokemon">pokemon coming soon</div>
      </div>

      </div>
      );
  }
}
export default StartPage;
