import React from 'react';
import SignupText from './signup-text';
import SignupForm from './signup-form';
import LoginForm from './login-form';
import './signup-section.css';

export default function SignupSection() {
	let showLogin = false;
	if (showLogin) {
		return (
			<section className="login-signup">
				<div className="form-wrapper horizontal-center">
					<LoginForm />
				</div>
			</section>
		)
	} 
	return (
		<section className="login-signup">
			<SignupText />
			<div className="form-wrapper horizontal-center">
				<SignupForm />
			</div>
		</section>
	)	
}
