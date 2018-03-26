import React from 'react';
import { connect } from 'react-redux';

import CloseSidebarWidget from './close-sidebar-widget';
import Header from './header';
import ProgramStats from './program-stats';
import DeleteProgramButton from './delete-program-button';
import ProgramCalendar from './program-calendar';
import AddWeekButton from './add-week-button';
import RemoveWeekButton from './remove-week-button';

import { fetchCalendar } from '../actions';

import './edit-program-sidebar.css';

export class EditProgramSidebar extends React.Component {

	componentDidMount() {  
		const programId = '5aaf72ca086bbd0004bea321'
		this.props.dispatch(fetchCalendar(programId));
	}

	render() {
		const programForEditing = this.props.programs.find(a => {
			return a.name === this.props.match.params.programTitle
		});
		
		return (
			<section className="edit-program-sidebar">
				<CloseSidebarWidget endpoint="/dashboard" />
				<Header 
					className="program-calendar-header
										 sidebar-header" 
					text={this.props.match.params.programTitle} 
				/>
				<ProgramStats />
				<DeleteProgramButton />
				<ProgramCalendar />
				<AddWeekButton />
				<RemoveWeekButton />
			</section>
		)
	}
}

const mapStateToProps = state => ({
	programs: state.programs,
	calendar: state.calendar,
	userId: state.userId
})

export default connect(mapStateToProps)(EditProgramSidebar);