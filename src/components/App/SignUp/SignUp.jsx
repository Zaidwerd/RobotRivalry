import React, { Component } from 'react';
import style from './SignUp.css';

export default class Signup extends Component {

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const myForm = event.target;

  // props.addUser(
  //   myForm.username.value,
  // );

  // }
  render() {
    return (
      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />
      <div className="formBox">
        <h1>SIGNUP</h1>

        <input
          className="user"
          type="text"
          placeholder="Create Username"
          value={this.props.userFormUsername}
          onChange={this.props.updateFormUsername}
        />
        <br/>
        <input
          className="pass"
          type="text"
          placeholder="Create Password"
          value={this.props.userFormPassword}
          onChange={this.props.updateFormPassword}
        />
        <br/>
        <input
          className="first"
          type="text"
          placeholder="Enter First Name"
          value={this.props.userFormFirstName}
          onChange={this.props.updateFormFirstName}
        />
        <br/>
        <input
          className="last"
          type="text"
          placeholder="Enter Last Name"
          value={this.props.userFormLastName}
          onChange={this.props.updateFormLastName}
        />
        <br/>
        <input
          className="age"
          type="text"
          placeholder="Enter Age"
          value={this.props.userFormAge}
          onChange={this.props.updateFormAge}
        />
        <br/>
        <input
          className="gender"
          type="text"
          placeholder="Select Gender"
          value={this.props.userFormGender}
          onChange={this.props.updateFormGender}
        />
        <br/>
        <input
          className="zodiac"
          type="text"
          placeholder="Select Zodiac Sign"
          value={this.props.userFormZodiac}
          onChange={this.props.updateFormZodiac}
        />
        <br/>
        <input
          className="state"
          type="text"
          placeholder="Enter State"
          value={this.props.userFormState}
          onChange={this.props.updateFormState}
        />
        <br/>
        <input
          className="email"
          type="text"
          placeholder="Enter Email"
          value={this.props.userFormEmail}
          onChange={this.props.updateFormEmail}
        />
        <br/>
        <button onClick={this.props.handleFormSubmit}> Sign up </button>
      
      </div>
      </div>
    );
  }
}
