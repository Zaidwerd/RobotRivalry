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
      <div id="formBox">
        <h1>SIGNUP</h1>

        <input
          type="text"
          placeholder="Create Username"
          value={this.props.userFormUsername}
          onChange={this.props.updateFormUsername}
        />

        <input
          type="text"
          placeholder="Create Password"
          value={this.props.userFormPassword}
          onChange={this.props.updateFormPassword}
        />

        <input
          type="text"
          placeholder="Enter First Name"
          value={this.props.userFormFirstName}
          onChange={this.props.updateFormFirstName}
        />

        <input
          type="text"
          placeholder="Enter Last Name"
          value={this.props.userFormLastName}
          onChange={this.props.updateFormLastName}
        />

        <input
          type="text"
          placeholder="Enter Age"
          value={this.props.userFormAge}
          onChange={this.props.updateFormAge}
        />

        <input
          type="text"
          placeholder="Select Gender"
          value={this.props.userFormGender}
          onChange={this.props.updateFormGender}
        />

        <input
          type="text"
          placeholder="Select Zodiac Sign"
          value={this.props.userFormZodiac}
          onChange={this.props.updateFormZodiac}
        />

        <input
          type="text"
          placeholder="Enter State"
          value={this.props.userFormState}
          onChange={this.props.updateFormState}
        />

        <input
          type="text"
          placeholder="Enter Email"
          value={this.props.userFormEmail}
          onChange={this.props.updateFormEmail}
        />

          <button onClick={this.props.handleFormSubmit}> Sign up </button>
      </div>
    );
  }
}
