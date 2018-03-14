import React from 'react';

export default function SignupForm() {
	return (
		<section className="login">
			<h2 className="login-heading">Log In</h2>
			<form>
				<label for="email">Email</label>
				<input id="email" type="text" name="" />
				<label for="password">Password</label>
				<input id="password" type="text" name="" />
				<input type="submit" name="sign up" className="submit-cancel-button" />
				<button className="submit-cancel-button">Back</button>
			</form>
		</section>
	)
}