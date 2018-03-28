import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({ min: 7, max: 72 });
const matchesPassword = matches('password');


export class SignupForm extends React.Component {
	onSubmit(values) {
		const { email, password, firstName, lastName } = values;
		const user = { email, password, firstName, lastName };
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(email, password)));
	} 
	
	render() {
		return (
			<form
				className="signup-form"
				onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
				)}>
				<label htmlFor="first-name">First Name</label>
				<input id="first-name" type="text" required name="" />
				<label htmlFor="first-name">Last Name</label>
				<input id="first-name" type="text" required name="" />
				<label htmlFor="email">Email</label>
				<input id="email" type="text" required name="" />
				<label htmlFor="password">Password</label>
				<input id="password" type="password" required name="" />
				<label htmlFor="confirm-password">Confirm password</label>
				<input id="confirm-password" type="password" required name="" />
				<input
					type="submit"
					name="sign up"
					className="submit-cancel-button"
				/>
			</form>
		)
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) => {
		return dispatch(focus('registration', Object.keys(errors)[0]))
	}
})(SignupForm);