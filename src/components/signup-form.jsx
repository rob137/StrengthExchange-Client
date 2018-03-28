import React from 'react';

export default function SignupForm() {
	return (
		<form 
			onSubmit={(e) => {
				e.preventDefault();
				console.log(1)
			}}
		>
			<label htmlFor="first-name">First Name</label>
			<input id="first-name" type="text" required name="" />
			<label htmlFor="first-name">Last Name</label>
			<input id="first-name" type="text" required name="" />
			<label htmlFor="email">Email</label>
			<input id="email" type="text" required name="" />
			<label htmlFor="password">Password</label>
			<input id="password" type="text" required name="" />
			<label htmlFor="confirm-password">Confirm password</label>
			<input id="confirm-password" type="text" required name="" />
			<input 
				type="submit" 
				name="sign up" 
				className="submit-cancel-button" 
			/>
		</form>
	)
}