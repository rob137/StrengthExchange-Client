import React from 'react';
import WorkoutTableHeadings from './workout-table-headings';

// Rows will need to be generated here
export default function WorkoutTableInputs() {
	return (
		<tbody>
			<WorkoutTableHeadings />
			<tr>
				<td><input type="text" defaultValue="Squat" placeholder="Exercise" /></td>
					<td><input type="number" defaultValue="130" placeholder="Weight" /></td>
					<td><input type="number" defaultValue="5" placeholder="Reps" /></td>
					<td><input type="number" defaultValue="3" placeholder="Sets" /></td>
			</tr>
			<tr>
				<td colSpan="4"><textarea type="text" className="comments-box" value="" placeholder="Your Comments"></textarea></td>
			</tr>
			<tr>
				<td><input type="text" defaultValue="Squat" placeholder="Exercise" /></td>
				<td><input type="number" defaultValue="130" placeholder="Weight" /></td>
				<td><input type="number" defaultValue="5" placeholder="Reps" /></td>
				<td><input type="number" defaultValue="3" placeholder="Sets" /></td>
			</tr>
			<tr>
				<td colSpan="4"><textarea type="text" className="comments-box" value="" placeholder="Your Comments"></textarea></td>
			</tr>
			<tr>
				<td><input type="text" defaultValue="Squat" placeholder="Exercise" /></td>
				<td><input type="number" defaultValue="130" placeholder="Weight" /></td>
				<td><input type="number" defaultValue="5" placeholder="Reps" /></td>
				<td><input type="number" defaultValue="3" placeholder="Sets" /></td>
			</tr>
			<tr>
				<td colSpan="4"><textarea type="text" className="comments-box" value="" placeholder="Your Comments"></textarea></td>
			</tr>
		</tbody>
	)
}

