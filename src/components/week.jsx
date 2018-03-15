import React from 'react';
import Day from './day';
import './week.css';

export default function Week() {
	return (
		<div className="week">		
			<h3 className="week-heading">Week N</h3>
			<ul className="calendar-week">
				<Day /> 
				<Day />
				<Day />
				<Day />
				<Day />
				<Day />
				<Day />
			</ul>
		</div>
	)
}