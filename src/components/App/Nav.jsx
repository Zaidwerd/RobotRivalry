import React, { Component } from 'react';
import style from './Nav.css';
// import style from './Home.css';

class Nav extends Component {
  render() {
    return (
      <div className="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />

        <nav className="navi">
          <ul className="nav-ul">
            <li className="nav-li"><h1 className="navhead">Robot Rivalry</h1></li>
            <li className="nav-li"><a className="navA" href="./#/">Home</a></li>
            <li className="nav-li"><a className="navA" href="./#/login">Login</a></li>
            <li className="nav-li"><a className="navA" href="./#/signup">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    )
  }

}
export default Nav;
