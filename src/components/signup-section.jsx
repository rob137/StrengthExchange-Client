import React from 'react';
import SignupText from './signup-text';
import SignupForm from './signup-form';
import LoginForm from './login-form';
import './signup-section.css';

export default function SignupSection() {

	

	return (
		<section className="login-signup">
			<SignupText />
			<div className="form-wrapper horizontal-center">
				<SignupForm />	
			</div>
		</section>
	)
}
