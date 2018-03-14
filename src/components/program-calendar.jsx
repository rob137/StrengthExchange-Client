import React from 'react';
import Week from './week';
import './program-calendar.css';

export default function ProgramCalendar() {
	return (
		<div className="program-calendar">
			<Week /> 
			<Week />
			<Week />
		</div>
	)
}

