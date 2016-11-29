import React, { Component } from 'react';
import style from './Login.css';

class LogIn extends Component {

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
          <div className="modal2cont">
          <h3 className="welcometo">Welcome {this.props.state.login.username} to Robot Rivalry</h3>

          <a className="loglink" href="./#/profile">Account</a>
          <br/>
          <a className="loglink" href="./#/startpage">Start Page</a>
          <br/>
          <a className="loglink" href="./#/stats">Stats</a>
          <br/>
          </div>
        </div>
      </div>
    )
  }

}
export default LogIn;
