import React from 'react';
import Day from './day';

export default function Week() {
	return (
		<ul className="calendar-week">
			<Day /> 
			<Day />
			<Day />
			<Day />
			<Day />
			<Day />
			<Day />
		</ul>
	)
}