import React, { Component } from 'react';
import style from './Login.css';

class LogIn extends Component {
  constructor(props) {
  super();

  this.state = {
    currentUser: null,
    username: '',
    password: '',
    loggedIn: false,
  }
}
  onSuccessfulLogIn(a) {
    this.alertInfo('Youre logged in!');
    console.log(a);
    this.setState({
      currentUser: a.id,
        username: '',
        password: '',
        loggedIn: true,
    });
  }

// grab password from
  updatePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  simpleAuth() {
    fetch('/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
    .then(r => r.json())
    .then(this.setState({
        username: '',
        password: '',
        loggedIn: false,
    }))
    .then(this.onSuccessfulLogIn.bind(this))
    .catch(err => console.log(err));
  }

   alertInfo(msg) {
    alert(msg);
  }

  render(){
    return (

      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />


        <div className='userBox'>

          <div className='hOne'>
            <h1>LOG IN</h1>
          </div>
          <br/>
          <div className='inputContainer'>
            <input className='user'
            type="text"
            placeholder="Username"
            value={this.props.Username}
            onChange={event => this.updateUsername(event)}
            />

            <input className='pass'
            type="text"
            placeholder="Password"
            value={this.props.Password}
            onChange={event => this.updatePassword(event)}
            />
            <br/>
            <button onClick={event => this.simpleAuth(event)}> Log In </button>
            <br/>

            <p className="or">-or-</p>

            <a href="./#/signup">Sign Up</a>

          </div>

        </div>
      </div>
    )
  }

}
export default LogIn;
