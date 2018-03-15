import React from 'react';
import CloseSidebarWidget from './close-sidebar-widget';
import Header from './header';
import EditWorkout from './edit-workout';
import './edit-workout-sidebar.css';

export default function EditWorkoutSidebar() {
	return (
		<section className="edit-workout-sidebar">
			<CloseSidebarWidget endpoint="/dashboard/edit-program/:programName"/>
			<Header 
				text="Press Your Car [workout clicked by user]" 
				className="sidebar-header"
			/>
			<EditWorkout />
		</section>
	)
}
