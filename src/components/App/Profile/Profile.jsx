import React, { Component } from 'react';
import '../../normalize.css';
import style from './Profile.css';

class Profile extends Component {

  render() {
    return(
      <div id="container">
        <div className="profile-cont">
          <ul className="pro-list">

            <li className="profile-li">Username: {this.props.state.username}</li>
            <li className="profile-li">First Name: {this.props.state.first_name}</li>
            <li className="profile-li">Last Name: {this.props.state.last_name}</li>
            <li className="profile-li">Age: {this.props.state.age}</li>
            <li className="profile-li">Gender: {this.props.state.gender}</li>
            <li className="profile-li">Zodiac: {this.props.state.zodiac}</li>
            <li className="profile-li">State: {this.props.state.state}</li>
            <li className="profile-li">Email: {this.props.state.email}</li>

          </ul>
          <div className="edit-button-cont">
        <button onClick={this.props.editButton}>Edit</button>
        <button className="delete-user" onClick={this.props.deleteUser}>Delete User</button>
          </div>
      </div>



        <div className="edit-modal">

        <div id="edit-container">

        <div className="edit-content">
          <input
            className="edit-first"
            type="text"
            placeholder={this.props.state.first_name}
            value={this.props.state.first_name}
            onChange={this.props.updateFirstName}
            />
          <input
            className="edit-last"
            type="text"
            placeholder={this.props.state.last_name}
            value={this.props.state.last_name}
            onChange={this.props.updateLastName}
            />

          <input
            className="edit-age"
            type="text"
            placeholder={this.props.state.age}
            value={this.props.state.age}
            onChange={this.props.updateAge}
            />

          <input
            className="edit-state"
            type="text"
            placeholder={this.props.state.state}
            value={this.props.state.state}
            onChange={this.props.updateState}
            />

          <button
            className="edit-button"
            onClick={this.props.submitEdit}> Submit Edit
          </button>

        </div>


      </div>

    </div>
  </div>
    );
  }
}

export default Profile;
