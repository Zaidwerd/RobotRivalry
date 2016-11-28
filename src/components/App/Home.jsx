import React, { Component } from 'react';
import style from './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />

	      <div className="welcome-box">
	      	<h1 className="welcome-hOne">WELCOME</h1>
	      	<div className="links-area">
			      <div className="welcome-button"><a className="alink" href="./#/login">LOG IN</a></div>
			      <div className="welcome-button"> || </div>
			      <div className="welcome-button"><a className="alink" href="./#/signup">SIGN UP</a></div>
		    </div>
	      </div>

	    </div>  
      )
  }

}
export default Home;
