import React, { Component } from 'react';
import style from './SignUp.css';

class SignUp extends Component {


  render() {
    return (
      <div id="formBox">
        <h1>SIGNUP</h1>
        <form className="signup-form">

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

          <button type="submit" className="signup-submit"> Sign up </button>

        </form>
      </div>
    );
  }
}

export default SignUp;
