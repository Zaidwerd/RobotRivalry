import React, { Component } from 'react';
import App from './Stats.jsx';
import '../../normalize.css';
import style from './Stats.css';


class Stats extends Component {

  render() {
    return (
      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:0,0,0|Titillium+Web:0,0,0,0i,0,0,0" rel="stylesheet" />
        <div className="stat-box">

          <div className="bigstat">


          <div className="GlobalStats">
              <div className="global-top">GLOBAL</div>

              <ul className="stat-ul">
                <li className="stat-li">Questions Answered: {this.props.state.total_q_answered}</li>
                <li className="stat-li">Questions Correct: {this.props.state.total_q_correct}</li>
                <li className="stat-li">Questions Incorrect: {this.props.state.total_q_incorrect}</li>
                <li className="stat-li">Total Games: {this.props.state.total_games}</li>
                <li className="stat-li">Percent of Questions Correct: {this.props.state.percent_q_correct}</li>
              </ul>
          </div>


          <div className="UserStats">
            <div className="user-top">User Stats</div>
              <ul>
              <li>Number of Games Played: {this.props.state.num_games_played}</li>
              <li>Total Correct: {this.props.state.total_num_correct}</li>
              <li>Total Incorrect: {this.props.state.total_num_incorrect}</li>
              </ul>

              <ul>
              <li>General Knowledge Played: {this.props.state.num_generalknowledge_played}</li>
              <li>General Knowledge Correct: {this.props.state.num_generalknowledge_correct}</li>
              <li>General Knowledge Incorrect: {this.props.state.num_generalknowledge_incorrect}</li>
              </ul>

              <ul>
              <li>Music Played: {this.props.state.num_music_played}</li>
              <li>Music Correct: {this.props.state.num_music_correct}</li>
              <li>Music Incorrect: {this.props.state.num_music_incorrect}</li>
              </ul>

              <ul>
              <li>Sports Played: {this.props.state.num_sports_played}</li>
              <li>Sports Correct: {this.props.state.num_sports_correct}</li>
              <li>Sports Incorrect: {this.props.state.num_sports_incorrect}</li>
              </ul>

              <ul>
              <li>TV Played: {this.props.state.num_television_played}</li>
              <li>TV Correct: {this.props.state.num_television_correct}</li>
              <li>TV Incorrect: {this.props.state.num_television_incorrect}</li>
              </ul>

              <ul>
              <li>Geography Played: {this.props.state.num_geography_played}</li>
              <li>Geography Correct: {this.props.state.num_geography_correct}</li>
              <li>Geography Incorrect: {this.props.state.num_geography_incorrect}</li>
              </ul>

              <ul>
              <li>History Played: {this.props.state.num_history_played}</li>
              <li>History Correct: {this.props.state.num_history_correct}</li>
              <li>History Incorrect: {this.props.state.num_history_incorrect}</li>
              </ul>

              <ul>
              <li>Politics Played: {this.props.state.num_politics_played}</li>
              <li>Politics Correct: {this.props.state.num_politics_correct}</li>
              <li>Politics Incorrect: {this.props.state.num_politics_incorrect}</li>
              </ul>

              <ul>
              <li>Celebrities Played: {this.props.state.num_celebrities_played}</li>
              <li>Celebrities Correct: {this.props.state.num_celebrities_correct}</li>
              <li>Celebrities Incorrect: {this.props.state.num_celebrtities_incorrect}</li>
              </ul>

              <ul>
              <li>Animals Played: {this.props.state.num_animals_played}</li>
              <li>Animals Correct: {this.props.state.num_animals_correct}</li>
              <li>Animals Incorrect: {this.props.state.num_animals_incorrect}</li>
              </ul>
          </div>
          </div>

        <div className="avi"></div>






        <div className="stat-button-cont">

          <button className="sb"><a className="stata" href='/#/startpage'>BACK</a></button>
          <button className="sb"><a className="stata" href='/#/gamestate'>PLAY</a></button>

        </div>

      </div>
    </div>
    )
  }
}
export default Stats;

