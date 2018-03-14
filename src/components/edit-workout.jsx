import React from 'react';
import DeleteWorkoutButton from './delete-workout-button';
import EditWorkoutForm from './edit-workout-form';

export default function EditWorkout() {
	return (
		<main className="edit-workout">
			<DeleteWorkoutButton />
			<EditWorkoutForm />
		</main>
	)
}
