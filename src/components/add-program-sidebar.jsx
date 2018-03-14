import React from 'react';
import CloseSidebarWidget from './close-sidebar-widget';
import Header from './header';
import AddProgramForm from './add-program-form';
import './add-program-sidebar.css';

export default function AddProgramSidebar() {
  return (
		<section className="add-program-sidebar">
			<CloseSidebarWidget />
			<Header 
			className="sidebar-header"
				text="Add Workout Program"
			/>
			<AddProgramForm />
		</section>
	)
}

