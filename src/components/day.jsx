import React from 'react';
import { Link } from 'react-router-dom';
import './day.css';

export default function Day(props) {
	const programTitle = "dummyTitleForNow";
	const editProgramEndpoint = `${programTitle}/edit-program`;
	return (
		<Link to={editProgramEndpoint}>
			<li className="day">	
				<span className="day-text">Day <span className="day-num">{props.dayNum}</span></span>
				<img className="day-img" src="/images/squat.png" alt="Squat" />
			</li>
		</Link>	
	)
}

