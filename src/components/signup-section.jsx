import React from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';

import Signup from './signup';
import Login from './login';

import './signup-section.css';

export default class SignupSection extends React.Component {
	render() {
		return (
			<Router>
				<div className="login-signup-container">
					<Route exact path="/" component={Signup} />
					<Route exact path="/login" component={Login} />
				</div>
			</Router>
		)
	}
}
