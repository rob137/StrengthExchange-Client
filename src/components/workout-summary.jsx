import React from 'react';

export default function WorkoutSummary() {
	return (
		<div>
			<label htmlFor="workout-summary">Your Summary</label><br />
			<textarea className="workout-summary" id="workout-summary" type="text" value="" placeholder="Your Summary"></textarea>
			<br /><br />
		</div>
	)
}

		