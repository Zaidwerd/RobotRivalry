import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App/App.jsx';
import LogIn from './components/App/LogIn/LogIn.jsx';
import SignUp from './components/App/SignUp/SignUp.jsx';
import StartPage from './components/App/StartPage/StartPage.jsx';
import Stats from './components/App/Stats/Stats.jsx';
import Categories from './components/App/Game/Categories/Categories.jsx';
import GameState from './components/App/Game/GameState/GameState.jsx';
import Levels from './components/App/Game/Levels/Levels.jsx';
import Question from './components/App/Game/Question/Question.jsx';
import Home from './components/App/Home.jsx';
import AddQuestion from './components/App/AddQuestions/AddQuestions';

// mount our App at #container
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/login" component={LogIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/startpage" component={StartPage}/>
      <Route path="/stats" component={Stats}/>
      <Route path="/categories" component={Categories}/>
      <Route path="/gamestate" component={GameState} />
      <Route path="/levels" component={Levels}/>
      <Route path="/question" component={Question}/>
      <Route path="/addQuestions" component={AddQuestion}/>
    </Route>
  </Router>
), document.querySelector('#root-container'))



    // <Route path="/gamefolder" component={GameFolder}/>
