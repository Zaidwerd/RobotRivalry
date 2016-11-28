import React, { Component } from 'react';
import '../../normalize.css';
import style from './Profile.css';
import Edit from './Edit.jsx';

class Profile extends Component {
  // constructor(props) {
  //   super();

  //   this.state = {
  //     username:'',
  //     first_name:'',
  //     last_name:'',
  //     age:'',
  //     gender:'',
  //     zodiac:'',
  //     state:'',
  //     email:'',
  //   };
  // }

//  updateFirstName(e) {
//     this.setState({
//       first_name: e.target.value,
//     })
//   }
//   updateLastName(e) {
//     this.setState({
//       last_name: e.target.value,
//     })
//   }
//   updateAge(e) {
//     this.setState({
//       age: e.target.value,
//     })
//   }
//   updateState(e) {
//     this.setState({
//       state: e.target.value,
//     })
//   }

//   getUser(){
//     console.log('User');
//     fetch('/users/')
//       .then(r => r.json())
//       .then((user) => {
//         this.setState({
//           username: user.username,
//           first_name: user.first_name,
//           last_name: user.last_name,
//           age: user.age,
//           gender: user.gender,
//           zodiac: user.zodiac,
//           state: user.state,
//           email: user.email,
//         })
//       })
//     .catch(error => console.log(error));
// }

//   submitEdit() {
//       console.log('adding question!');
//       fetch('/users', {
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//         method: 'POST',
//         body: JSON.stringify({
//           first_name: this.state.first_name,
//           last_name: this.state.last_name,
//           age: this.state.age,
//           state: this.state.state,
//         })
//       })
//       .then(this.setState({
//         first_name: '',
//         last_name: '',
//         age: '',
//         state: '',
//       }))
//       .catch(err => console.log(err));
//     }

//   deleteUser() {

//   }

  render() {
    return(
      <div id="container">

        <div className="profile-cont">
          <ul className="pro-list">
            <li className="profile-li">Username: {this.state.username}</li>
            <li className="profile-li">First Name: {this.state.first_name}</li>
            <li className="profile-li">Last Name: {this.state.last_name}</li>
            <li className="profile-li">age: {this.state.age}</li>
            <li className="profile-li">gender: {this.state.gender}</li>
            <li className="profile-li">zodiac: {this.state.zodiac}</li>
            <li className="profile-li">state: {this.state.state}</li>
            <li className="profile-li">email: {this.state.email}</li>

            <li>Username: {this.props.state.username}</li>
            <li>First Name: {this.props.state.first_name}</li>
            <li>Last Name: {this.props.state.last_name}</li>
            <li>age: {this.props.state.age}</li>
            <li>gender: {this.props.state.gender}</li>
            <li>zodiac: {this.props.state.zodiac}</li>
            <li>state: {this.props.state.state}</li>
            <li>email: {this.props.state.email}</li>
          </ul>
        

          <div className="edit-button-cont">
            <button className="edit-user">Edit User</button>
            <button className="delete-user" onClick={event => this.deleteUser(event)}>Delete User</button>
            <button className="submit-q"><a className="submitquest" href="/addQuestions"> Submit Question</a></button>

          </div>
        </div>



        <div className="edit-modal">
        <Edit
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          age={this.state.age}
          state={this.state.state}
          updateFirstName={event => this.updateFirstName(event)}
          updateLastName={event => this.updateLastName(event)}
          updateAge={event => this.updateAge(event)}
          updateState={event => this.updateState(event)}
          submitEdit={event => this.submitEdit(event)}
          />
        </div>

        <button>Edit</button>
        <button onClick={this.props.deleteUser}>Delete</button>

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
    );
  }
}

export default Profile;
