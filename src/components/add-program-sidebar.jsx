import React from 'react';
import { connect } from 'react-redux';

import CloseSidebarWidget from './close-sidebar-widget';
import Header from './header';
import AddProgramForm from './add-program-form';

import './add-program-sidebar.css';

export function AddProgramSidebar(props) {
	return (
		<section className="add-program-sidebar">
			<CloseSidebarWidget endpoint="/dashboard" />
			<Header 
				className="sidebar-header"
				text="Add Workout Program"
			/>
			<AddProgramForm />
		</section>
	)
}

const mapStateToProps = state => ({
	programs: state.programs
})

export default connect(mapStateToProps)(AddProgramSidebar);