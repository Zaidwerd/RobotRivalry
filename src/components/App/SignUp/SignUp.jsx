import React, { Component } from 'react';
import style from './SignUp.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      signUpUserName: '',
      signUpPassword: ''
    };
  }

  render() {
    return (
      <div id ={style['container']}>

      <h1>SIGNUP</h1>
      <input
      type="text"
      placeholder="Create username"
      value=""
      />
      <input
       type="text"
       placeholder="Create Password"
       value=""
       />
       </div>
      )
  }

}
export default SignUp;
