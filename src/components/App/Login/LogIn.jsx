import React, { Component } from 'react';
import style from './Login.css';

class LogIn extends Component {
//   constructor(props) {
//   super();

//   this.state = {
//     currentUser: null,
//     login: {
//       username: '',
//       password: '',
//       loggedIn: false,
//     }
//   }
// }
  // LogIn(a) {
  //   alert('Logged in to Robot Rivalry!');
  //   console.log(a);
  //   this.setState({
  //     currentUser: a.id,
  //     login: {
  //       username: '',
  //       password: '',
  //       loggedIn: true,
  //     },
  //   });
  // }

// // grab password from
  // updatePassword(e) {
  //   this.setState({
  //     login: {
  //       username: this.state.login.username,
  //       password: e.target.value,
  //       loggedIn: false,
  //     }
  //   });
  // }

  // updateUsername(e) {
  //   this.setState({
  //      login: {
  //       username: e.target.value,
  //       password: this.state.login.password,
  //       loggedIn: false,
  //     }
  //   });
  // }

//   simpleAuth() {
//     fetch('/auth', {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       method: 'POST',
//       body: JSON.stringify({
//         username: this.state.login.username,
//         password: this.state.login.password,
//       }),
//     })
//     .then(r => r.json())
//     .then(this.setState({
//       login: {
//         username: '',
//         password: '',
//         loggedIn: false,
//       }
//     }))
//     .then(this.LogIn.bind(this))
//     .catch(err => console.log(err));
//   }


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
            value={this.props.state.login.username}
            onChange={this.props.updateUsername}
            />

            <input className='pass'
            type="text"
            placeholder="Password"
            value={this.props.state.login.password}
            onChange={this.props.updatePassword}
            />


            <br/>
            <button onClick={this.props.simpleAuth}> Log In </button>

            <br/>

            <p className="or">-or-</p>

            <a className="login-su" href="./#/signup">Sign Up</a>

          </div>

        </div>
        <div id='modal2'>
          <h3>Welcome {this.props.state.login.username} to Robot Rivalry</h3>

          <a href="./#/profile">Account</a>
          <br/>
          <a href="./#/startpage">Start Page</a>
          <br/>
          <a href="./#/stats">Stats</a>
          <br/>

        </div>
      </div>
    )
  }

}
export default LogIn;
