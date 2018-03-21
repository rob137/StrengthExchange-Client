import React from 'react';
import { connect } from 'react-redux';

import ProgramNameInput from './program-name-input';
import CreateProgramButton from './create-program-button';
import CancelCreateProgramButton from './cancel-create-program-button';
import ProgramSummaryInput from './program-summary-input';

import { postProgram } from '../actions';

import './add-program-form.css';

export class AddProgramForm extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			progNameInput: "",
			progSummaryInput: ""
		}
	}

	postProgram(program) {
		this.props.dispatch(postProgram(program));
	}

	setProgramName(text) {
		this.setState({
			progNameInput: text
		});
	}

	setProgramSummary(text) {
		this.setState({
			progSummaryInput: text
		});
	}

	render() {
		const program = {
			name: this.state.progNameInput,
			summary: this.state.progSummaryInput
		}
		
		return (
			<form className="horizontal-center">
				<ProgramNameInput setProgramName={this.setProgramName.bind(this)}/>
				<ProgramSummaryInput setProgramSummary={this.setProgramSummary.bind(this)}/>
				<CreateProgramButton 
					addProgram={() => {
						this.postProgram(program);
					}}
				/>
				<CancelCreateProgramButton />
			</form>
		)
	}
}

export default connect()(AddProgramForm);
