import React, { Component } from 'react';
import SignUp from './Levels.jsx';
import style from './Levels.css';


class App extends Component {

render() {
  return (
    <div id="container">
    <header>
    <h1>Levels</h1>
    </header>

    <button className="easy">Easy</button>
    <button className="Medium">Medium</button>
    <button className="Hard">Hard</button>



    <Levels


      />
      </div>
    )
}
}
export default App;
