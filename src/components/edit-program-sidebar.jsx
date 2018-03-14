import React from 'react';
import CloseSidebarWidget from './close-sidebar-widget';
import Header from './header';
import WorkoutStats from './workout-stats';
import DeleteProgramButton from './delete-program-button';
import ProgramCalendar from './program-calendar';
import AddWeekButton from './add-week-button';
import RemoveWeekButton from './remove-week-button';

export default function EditProgramSidebar() {
	return (
		<section class="edit-program-sidebar">
			<CloseSidebarWidget />
			<Header text="Press Your Car" />
			<WorkoutStats />
			<DeleteProgramButton />
			<ProgramCalendar />
			<AddWeekButton />
			<RemoveWeekButton />
		</section>
	)
}
