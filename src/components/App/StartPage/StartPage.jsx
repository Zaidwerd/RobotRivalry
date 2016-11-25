import React, { Component } from 'react';
import './starterBG.jpg';
import style from './StartPage.css';
import { Link } from 'react-router';
import Categories from '../Game/Categories/categories.jsx';


class StartPage extends Component {
  render(){
    return (

      <div className="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />

      <div className="bg">
      <button className="robotrivalry">
        <Link to="/categories"></Link>
      </button>

      <div className="cookingmama">cookingmama coming soon</div>
      <div className="pokemon">pokemon coming soon</div>
      </div>

      </div>
      );
  }
}
export default StartPage;
