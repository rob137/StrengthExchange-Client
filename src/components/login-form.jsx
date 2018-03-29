import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import { Link } from 'react-router-dom'

import Input from './input';

export class SignupForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(login(values.email, values.password));
	}
	
	render() {
		let error;
		if (this.props.error) {
			error = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		}
		return (
			<section className="login">
				<h2 className="login-heading">Log In</h2>
				<form
					className="login-form"
					onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
					)}>
					{error}
					<label htmlFor="email">Email</label>
					<Field 
						component={Input} 
						id="email" 
						name="email"
						type="text"
						validate={[required, nonEmpty]}
					/>
					<label htmlFor="password">Password</label>
					<Field
						component={Input}
						id="password" 
						name="password"
						type="password"
						validate={[required, nonEmpty]}
					/>
					<button 
						className="submit-login-button" 
						disabled={this.props.pristine || this.props.submitting}
					> 
						Log in
					</button>
				</form>
				<Link to=""><button className="submit-cancel-button">Back</button></Link>
			</section>
		);
	}
}


export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(SignupForm);