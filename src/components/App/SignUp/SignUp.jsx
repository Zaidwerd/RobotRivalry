import React, { Component } from 'react';
import style from './SignUp.css';

export default function SignUp(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;


  }

    return (
      <div id="formBox">
        <h1>SIGNUP</h1>
        <form className="signup-form">

          <input
          type="text"
          placeholder="Create Username"
          value=""
          />

          <input
           type="text"
           placeholder="Create Password"
           value=""
           />

          <input
           type="text"
           placeholder="Enter First Name"
           value=""
           />

          <input
           type="text"
           placeholder="Enter Last Name"
           value=""
           />

          <input
           type="text"
           placeholder="Enter Age"
           value=""
           />

          <input
           type="text"
           placeholder="Select Gender"
           value=""
           />

          <input
           type="text"
           placeholder="Select Zodiac Sign"
           value=""
           />

          <input
           type="text"
           placeholder="Enter State"
           value=""
           />

          <input
           type="text"
           placeholder="Enter Email"
           value=""
           />

          <button type="submit" className="signup-submit"> Sign up </button>

        </form>
      </div>
    );
}
