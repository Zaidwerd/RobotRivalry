import React, { Component } from 'react';
import style from './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="cont">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />

	      <div className="welcome-box">
	      	<h1>WELCOME</h1>
	      	<div className="links-area">
			      <a className="welcome-button" href="./#/login">LOG IN</a>
			      <span>  ||  </span>
			      <a className="welcome-button" href="./#/signup">SIGN UP</a>
		      </div>
	      </div>

	    </div>  
      )
  }

}
export default Home;
