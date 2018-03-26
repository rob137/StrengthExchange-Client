import React from 'react';
import Day from './day';
import './week.css';

export default function Week(props) {
	let weekNum = 0;
	let daysHtml = [];
	if (props.weekArr) {
		weekNum = props.weekArr[0].week;
		daysHtml = props.weekArr
			.sort((a, b) => a.day > b.day)
			.map((dayObj, index) => {
				return <Day key={index} dayNum={dayObj.day%7}/>
			})
	}
	
	return (
		<div className="week">		
			<h3 className="week-heading">Week {weekNum}</h3>
			<ul className="calendar-week">
				{daysHtml}
			</ul>
		</div>
	)
}