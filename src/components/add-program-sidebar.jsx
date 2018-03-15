import React from 'react';
import CloseSidebarWidget from './close-sidebar-widget';
import Header from './header';
import DeleteProgramButton from './delete-program-button';
import ProgramCalendar from './program-calendar';
import AddWeekButton from './add-week-button';
import RemoveWeekButton from './remove-week-button';
import AddProgramForm from './add-program-form';
import './add-program-sidebar.css';

export default function AddProgramSidebar(props) {
	return (
		<section className="add-program-sidebar">
			<CloseSidebarWidget endpoint="/dashboard" />
			<Header 
				className="sidebar-header"
				text="Add Workout Program"
			/>
			<AddProgramForm />
			<DeleteProgramButton />
			<ProgramCalendar />
			<AddWeekButton />
			<RemoveWeekButton />
		</section>
	)
}
