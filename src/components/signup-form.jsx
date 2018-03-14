import React from 'react';
import './signup-form.css';

export default function SignupForm() {
	return (
		<form>
			<label for="name">Name</label><br />
			<input id="name" type="text" name="" /><br />
			<label for="email">Email</label><br />
			<input id="email" type="text" name="" /><br />
			<label for="password">Password</label><br />
			<input id="password" type="text" name="" /><br />
			<label for="confirm-password">Confirm password</label><br />
			<input id="confirm-password" type="text" name="" /><br /><br />
			<input type="submit" name="sign up" className="submit-button" />
		</form>
	)
}