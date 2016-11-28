import React, { Component } from 'react';
import '../../normalize.css';
import style from './Edit.css';

class Edit extends Component {

  render() {
    return(
      <div id="container">

        <div className="edit-content">
          first name:
          <input
            className="edit-first"
            type="text"
            placeholder={this.props.first_name}
            value={this.props.first_name}
            onChange={this.props.updateFirstName}
            />
            last name:
          <input
            className="edit-last"
            type="text"
            placeholder={this.props.last_name}
            value={this.props.last_name}
            onChange={this.props.updateLastName}
            />
            age:
          <input
            className="edit-age"
            type="text"
            placeholder={this.props.age}
            value={this.props.age}
            onChange={this.props.updateAge}
            />
            state:
          <input
            className="edit-state"
            type="text"
            placeholder={this.props.state}
            value={this.props.state}
            onChange={this.props.updateState}
            />
            <br/>
          <button 
            className="edit-button" 
            onClick={this.props.submitEdit}> Submit Edit
          </button>
        </div>

      </div>
    );
  }
}

export default Edit;

