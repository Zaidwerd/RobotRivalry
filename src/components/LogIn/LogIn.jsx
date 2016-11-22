import React, { Component } from 'react';
import style from './LogIn.css';

class LogIn extends Component {
  render() {
    return (
      <div id ={style['container']}>

      <div className='userBox'>
        <input
          type="text"
          placeholder="Username"
          value={this.props.Username}
        />
        <input
           type="text"
           placeholder="Password"
           value={this.props.Password}
         />
         <button> Log In </button>
       </div>

       </div>
    )
  }

}
export default LogIn;
