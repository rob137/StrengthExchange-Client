import React from 'react';

export default function SignupForm() {
	return (
		<form>
			<label htmlFor="name">Name</label>
			<input id="name" type="text" name="" />
			<label htmlFor="email">Email</label>
			<input id="email" type="text" name="" />
			<label htmlFor="password">Password</label>
			<input id="password" type="text" name="" />
			<label htmlFor="confirm-password">Confirm password</label>
			<input id="confirm-password" type="text" name="" />
			<input type="submit" name="sign up" className="submit-cancel-button" />
		</form>
	)
}