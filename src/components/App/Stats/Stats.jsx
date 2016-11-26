import React, { Component } from 'react';
import App from './Stats.jsx';
import '../../normalize.css';
import style from './Stats.css';


class Stats extends Component {

  render() {
    return (
      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />
        <div className="stat-box">
          <div className="UserStats">
            <div className="user-top">HELLO</div>
          </div>

          <div className="avi"></div>

          <div className="GlobalStats">
            <div className="global-top">GLOBAL</div>
          </div>

        </div>
        
      </div>
    )
  }
}
export default Stats;

