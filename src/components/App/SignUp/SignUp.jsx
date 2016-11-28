import React, { Component } from 'react';
import style from './SignUp.css';

export default class Signup extends Component {

  render() {
    return (
      <div id="container">
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Titillium+Web:200,300,400,400i,600,700,900" rel="stylesheet" />
      <div className="formBox">


          <div className='hOne'>
            <h1>SIGN UP</h1>
          </div>

        <div className="signup-inputContainer">
          <input
            className="user"
            type="text"
            placeholder="Create Username"
            value={this.props.state.userFormUsername}
            onChange={this.props.updateFormUsername}
          />
          <br/>
          <input
            className="pass"
            type="text"
            placeholder="Create Password"
            value={this.props.state.userFormPassword}
            onChange={this.props.updateFormPassword}
          />
          <br/>
          <input
            className="first"
            type="text"
            placeholder="First Name"
            value={this.props.state.userFormFirstName}
            onChange={this.props.updateFormFirstName}
          />
          <br/>
          <input
            className="last"
            type="text"
            placeholder="Last Name"
            value={this.props.state.userFormLastName}
            onChange={this.props.updateFormLastName}
          />
          <br/>
          <input
            className="age"
            type="text"
            placeholder="Age"
            value={this.props.state.userFormAge}
            onChange={this.props.updateFormAge}
          />
          <br/>
          <input
            className="gender"
            type="text"
            placeholder="Gender"
            value={this.props.state.userFormGender}
            onChange={this.props.updateFormGender}
          />
          <br/>
          <input
            className="zodiac"
            type="text"
            placeholder="Zodiac Sign"
            value={this.props.state.userFormZodiac}
            onChange={this.props.updateFormZodiac}
          />
          <br/>
          <input
            className="state"
            type="text"
            placeholder="State"
            value={this.props.state.userFormState}
            onChange={this.props.updateFormState}
          />
          <br/>
          <input
            className="email"
            type="text"
            placeholder="Email"
            value={this.props.state.userFormEmail}
            onChange={this.props.updateFormEmail}
          />
          <br/>
          <input
            className="other-email"
            type="text"
            placeholder="Other Email"
            value={this.props.state.userFormEmail}
            onChange={this.props.updateFormEmail}
          />
          <br/>

          <a href='/#/login'><button onClick={this.props.handleFormSubmit}>Sign Up</button></a>


        </div>

      </div>
      </div>
    );
  }
}
