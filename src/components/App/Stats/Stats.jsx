import React, { Component } from 'react';
import App from './Stats.jsx';
import '../../normalize.css';
import style from './Stats.css';


class Stats extends Component {
   constructor(props){
    super();
    this.state = {
       userStats: {
         num_games_played: 0,
         total_num_correct: 0,
         total_num_incorrect: 0,
         num_generalknowledge_played: 0,
         num_generalknowledge_correct: 0,
         num_generalknowledge_incorrect: 0,
         num_music_played: 0,
         num_music_correct: 0,
         num_music_incorrect: 0,
         num_sports_played: 0,
         num_sports_correct: 0,
         num_sports_incorrect: 0,
         num_television_played: 0,
         num_television_correct: 0,
         num_television_incorrect: 0,
         num_geography_played: 0,
         num_geography_correct: 0,
         num_geography_incorrect: 0,
         num_history_played: 0,
         num_history_correct: 0,
         num_history_incorrect: 0,
         num_politics_played: 0,
         num_politics_correct: 0,
         num_politics_incorrect: 0,
         num_celebrities_played: 0,
         num_celebrities_correct: 0,
         num_celebrtities_incorrect: 0,
         num_animals_played: 0,
         num_animals_correct: 0,
         num_animals_incorrect: 0
       },

       globalStats: {
        total_q_answered: 0,
        total_q_correct: 0,
        total_q_incorrect: 0,
        total_games: 0,
        percent_q_correct: 0
      }
    }
  }




  render() {
    return (
      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:0,0,0|Titillium+Web:0,0,0,0i,0,0,0" rel="stylesheet" />
        <div className="stat-box">
          <div className="UserStats">
            <div className="user-top">User Stats</div>
              <ul>
              <li>Number of Games Played: {this.state.userStats.num_games_played}</li>
              <li>Total Correct: {this.state.userStats.total_num_correct}</li>
              <li>Total Incorrect: {this.state.userStats.total_num_incorrect}</li>
              </ul>
          </div>

          <div className="avi"></div>

          <div className="GlobalStats">
            <div className="global-top">GLOBAL</div>
            <ul>
              <li>Questions Answered: {this.state.globalStats.total_q_answered}</li>
              <li>Questions Correct: {this.state.globalStats.total_q_correct}</li>
              <li>Questions Incorrect: {this.state.globalStats.total_q_incorrect}</li>
              <li>Total Games: {this.state.globalStats.total_games}</li>
              <li>Percent of Questions Correct: {this.state.globalStats.percent_q_correct}</li>
            </ul>
          </div>

        </div>

        <div className="stat-buttons">
        <button><a href='/#/startpage'>BACK</a></button>
        <button><a href='/#/gamestate'>AGAIN</a></button> 
        </div>

      </div>
    )
  }
}
export default Stats;

