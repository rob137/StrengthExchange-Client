import React from 'react';
import CloseSidebarWidget from './close-sidebar-widget';
import Header from './header';
import ProgramStats from './program-stats';
import DeleteProgramButton from './delete-program-button';
import ProgramCalendar from './program-calendar';
import AddWeekButton from './add-week-button';
import RemoveWeekButton from './remove-week-button';
import './edit-program-sidebar.css';

export default function EditProgramSidebar() {
	return (
		<section className="edit-program-sidebar">
			<CloseSidebarWidget />
			<Header 
				className="program-calendar-header
									 sidebar-header" 
				text="Press Your Car" 
			/>
			<ProgramStats />
			<DeleteProgramButton />
			<ProgramCalendar />
			<AddWeekButton />
			<RemoveWeekButton />
		</section>
	)
}
