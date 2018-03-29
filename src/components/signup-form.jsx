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
				onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values)
				)}>
			>
				<label htmlFor="firstName">First Name</label>
				<Field 
					component={Input} 
					type="text" 
					name="firstName"
					validate={[required, nonEmpty, isTrimmed]}
				/>
				<label htmlFor="lastName">Last Name</label>
				<Field 
					component={Input} 
					type="text" 
					name="lastName" 
					validate={[required, nonEmpty, isTrimmed]}
				/>
				<label htmlFor="email">Email</label>
				<Field 
					component={Input} 
					type="text" 
					name="email" 
					validate={[required, nonEmpty, isTrimmed]}
				/>
				<label htmlFor="password">Password</label>
				<Field 
					component={Input} 
					type="password" 
					name="password" 
					validate={[required, passwordLength, isTrimmed]}
				/>
				<label htmlFor="passwordConfirm">Confirm password</label>
				<Field 
					component={Input} 
					type="password" 
					name="passwordConfirm" 
					validate={[required, nonEmpty, matchesPassword]}
				/>
				<button
					type="submit"
					name="sign up"
					className="register-button"
					disabled={this.props.submitting}
				>
					Register
				</button>
			</form>
		)
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
})(SignupForm);