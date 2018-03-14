import React from 'react';
import WorkoutSummary from './workout-summary';
import WorkoutTable from './workout-table';
import AddExerciseButton from './add-exercise-button';
import SaveExerciseEditsButton from './save-exercise-edits-button';

export default function EditWorkoutForm() {
	return (
		<form>
			<WorkoutSummary />
			<WorkoutTable />
			<AddExerciseButton />
			<SaveExerciseEditsButton />
		</form>
	)
}
