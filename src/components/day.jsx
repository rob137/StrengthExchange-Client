import React from 'react';
import './day.css';

export default function Day() {
	return (
		<li className="day">
			<span className="day-text">Day <span className="day-num">1</span></span>
			<img className="day-img" src="./images/squat.png" alt="Squat" />
		</li>
	)
}

