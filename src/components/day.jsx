import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './day.css';

export default function Day() {
	return (
		<Link to="/dashboard/edit-program/jumbo body/edit-workout/1">
			<li className="day">
				<a>
					<span className="day-text">Day <span className="day-num">1</span></span>
					<img className="day-img" src="/images/squat.png" alt="Squat" />
				</a>
			</li>
		</Link>	
	)
}

