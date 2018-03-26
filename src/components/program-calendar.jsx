import React from 'react';
import { connect } from 'react-redux';
import Week from './week';
import './program-calendar.css';

export function ProgramCalendar(props) {

	// calendar.days objects have day numbers, but no weeks yet. 
	const assignWeeksToDays = days => {
		return days.map(i => {
			i.week = Math.ceil(i.day / 7);
			return i;
		});
	}

	const createWeeksArr = (daysWithWeeks) => {
		let totalWeeks = Math.ceil(daysWithWeeks.length / 7);
		const weeksArr = [];
		while (totalWeeks > 0) {
			weeksArr.push(daysWithWeeks.filter(a => a.week === totalWeeks));
			totalWeeks -= 1;
		}
		return weeksArr;
	}

	const createCalendarWithWeeks = days => {
		const daysWithWeeks = assignWeeksToDays(days)
		return createWeeksArr(daysWithWeeks);
	}

	let calendarWithWeeks = [];
	
	if (props.calendar.days) {
		calendarWithWeeks = createCalendarWithWeeks(props.calendar.days);
	}
	
	const weeks = calendarWithWeeks.map((weekArr, index) => {
		return <Week key={index} weekArr={weekArr} />
	});


	
	return (
		<div className="program-calendar">
			{weeks}
		</div>
	)
}

const mapStateToProps = state => ({
	calendar: state.calendar
});

export default connect(mapStateToProps)(ProgramCalendar);