import React from 'react';
import SignupForm from './signup-form';
import './signup-section.css';

export default function SignupSection() {
	return (
		<section className="login-signup">
			<h2>Sign Up</h2>
			<p>Already registered? Click <a href="blank">here</a> to sign in</p>
			<div className="form-wrapper horizontal-center">
				<SignupForm />	
			</div>
		</section>
	)
}
