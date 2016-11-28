import React, { Component } from 'react';
import './starterBG.jpg';
import style from './StartPage.css';
import { Link } from 'react-router';
import Categories from '../Game/Categories/categories.jsx';


class StartPage extends Component {
  render(){
    return (

      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />

      <div className="bg">

      <button className="robotrivalry">
        <Link className="start-game" to="/gamestate">ROBOT RIVALRY</Link>
      </button>


      <div className="cookingmama">COMING SOON</div>
      <div className="pokemon">COMING SOON</div>
      </div>

      </div>
      );
  }
}
export default StartPage;
