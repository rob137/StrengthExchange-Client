import React from 'react';
import SignupForm from './signup-form';
import './signup-section.css';

export default function SignupSection() {
	return (
		<section class="login-signup">
			<h2>Sign Up</h2>
			<p>Already registered? Click <a href="blank">here</a> to sign in</p>
			<div class="form-wrapper horizontal-center">
				<SignupForm />	
			</div>
		</section>
	)
}
