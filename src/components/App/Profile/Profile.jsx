import React, { Component } from 'react';
import '../../normalize.css';
import style from './Profile.css';
import Edit from './Edit.jsx';

class Profile extends Component {
  constructor(props) {
    super();

    this.state = {
      username:'',
      first_name:'',
      last_name:'',
      age:'',
      gender:'',
      zodiac:'',
      state:'',
      email:'',
    };
  }

 updateFirstName(e) {
    this.setState({
      first_name: e.target.value,
    })
  }
  updateLastName(e) {
    this.setState({
      last_name: e.target.value,
    })
  }
  updateAge(e) {
    this.setState({
      age: e.target.value,
    })
  }
  updateState(e) {
    this.setState({
      state: e.target.value,
    })
  }

  getUser(){
    console.log('User');
    fetch('/users/')
      .then(r => r.json())
      .then((user) => {
        this.setState({
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name,
          age: user.age,
          gender: user.gender,
          zodiac: user.zodiac,
          state: user.state,
          email: user.email,
        })
      })
    .catch(error => console.log(error));
}

  submitEdit() {
      console.log('adding question!');
      fetch('/users', {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        body: JSON.stringify({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          age: this.state.age,
          state: this.state.state,
        })
      })
      .then(this.setState({
        first_name: '',
        last_name: '',
        age: '',
        state: '',
      }))
      .catch(err => console.log(err));
    }

  render() {
    return(
      <div id="container">
      <div>
        <ul>
          <li>Username: {this.state.username}</li>
          <li>First Name: {this.state.first_name}</li>
          <li>Last Name: {this.state.last_name}</li>
          <li>age: {this.state.age}</li>
          <li>gender: {this.state.gender}</li>
          <li>zodiac: {this.state.zodiac}</li>
          <li>state: {this.state.state}</li>
          <li>email: {this.state.email}</li>
        </ul>
      </div>

      <button>Edit</button>

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
    );
  }
}

export default Profile;
