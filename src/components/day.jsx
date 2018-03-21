import React from 'react';
import { Link } from 'react-router-dom';
import './day.css';

export default function Day() {
	const programId = "dummyIdForNow";
	const editProgramEndpoint = `${programId}/edit-program`;
	return (
		<Link to={editProgramEndpoint}>
			<li className="day">	
				<span className="day-text">Day <span className="day-num">1</span></span>
				<img className="day-img" src="/images/squat.png" alt="Squat" />
			</li>
		</Link>	
	)
}

