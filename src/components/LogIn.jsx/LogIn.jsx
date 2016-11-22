import React, {Component} from 'react';
import './../normalize.css';
import style from './LogIn.css';

class LogIn extends Component {

	render() {
		return (
			<div className="Container">
				<input
					type='text'
					placeholder='Username'
					value={this.props.login}
				/>
				<input='text'
				placeholder='Password'
				value={this.props.password}
				/>
				<button onClick='#'>
					LOG IN
				</button>
			</div>

		)
	}
}
export default LogIn;