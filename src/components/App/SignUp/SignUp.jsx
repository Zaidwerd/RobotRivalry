import React, { Component } from 'react';
import style from './SignUp.css';

export default function SignUp(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;

  props.addUser(
    myForm.username.value,
  );

  }

    return (
      <div id="formBox">
        <h1>SIGNUP</h1>
        <form className="signup-form" onSubmit={handleSubmit}>

          <input
          type="text"
          placeholder="Create Username"
          name="username"
          />

          <input
           type="text"
           placeholder="Create Password"
           name=""
           />

          <input
           type="text"
           placeholder="Enter First Name"
           name=""
           />

          <input
           type="text"
           placeholder="Enter Last Name"
           name=""
           />

          <input
           type="text"
           placeholder="Enter Age"
           name=""
           />

          <input
           type="text"
           placeholder="Select Gender"
           name=""
           />

          <input
           type="text"
           placeholder="Select Zodiac Sign"
           name=""
           />

          <input
           type="text"
           placeholder="Enter State"
           name=""
           />

          <input
           type="text"
           placeholder="Enter Email"
           name=""
           />

          <button type="submit" className="signup-submit"> Sign up </button>

        </form>
      </div>
    );
}
