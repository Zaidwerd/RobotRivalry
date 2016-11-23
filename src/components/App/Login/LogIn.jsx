import React, { Component } from 'react';
import style from './LogIn.css';

class LogIn extends Component {

  render() {
    return (

      <div id="container">
      


        <div className='userBox'>

          <div className='hOne'>
            <h1>Log In</h1>
          </div>

          <div className='inputContainer'>
            <input className='user'
            type="text"
            placeholder="Username"
            value={this.props.Username}
            />

            <input className='pass'
            type="text"
            placeholder="Password"
            value={this.props.Password}
            />
            <button> Log In </button>
          </div>
          
        </div>  
      </div>
    )
  }

}
export default LogIn;
