import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App/App.jsx';
import LogIn from './components/App/LogIn/LogIn.jsx';
import SignUp from './components/App/SignUp/SignUp.jsx';
import StartPage from './components/App/StartPage/StartPage.jsx';
import Stats from './components/App/Stats/Stats.jsx';
import GameState from './components/App/Game/GameState/GameState.jsx';
import Home from './components/App/Home.jsx';
import AddQuestion from './components/App/AddQuestions/AddQuestions';
import Profile from './components/App/Profile/Profile.jsx';

// mount our App at #container
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={LogIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/startpage" component={StartPage}/>
      <Route path="/stats" component={Stats}/>
      <Route path="/gamestate" component={GameState}/>
      <Route path="/addQuestions" component={AddQuestion}/>
      <Route path="/profile" component={Profile}/>
    </Route>
  </Router>
), document.querySelector('#root-container'))



      // <Route path="/levels" component={Levels}/>
    // <Route path="/gamefolder" component={GameFolder}/>
