import React from 'react';
import { connect } from 'react-redux';

import ProgramNameInput from './program-name-input';
import CreateProgramButton from './create-program-button';
import CancelCreateProgramButton from './cancel-create-program-button';
import ProgramSummaryInput from './program-summary-input';

import { addProgram } from '../actions';

import './add-program-form.css';

export class AddProgramForm extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			progNameInput: "",
			progSummaryInput: ""
		}
	}

	addProgram(name, summary) {
		this.props.dispatch(addProgram(name, summary));
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
		return (
			<form className="horizontal-center">
				<ProgramNameInput setProgramName={this.setProgramName.bind(this)}/>
				<ProgramSummaryInput setProgramSummary={this.setProgramSummary.bind(this)}/>
				<CreateProgramButton 
					addProgram={() => {
						this.addProgram(this.state.progNameInput, this.state.progSummaryInput);
					}}
				/>
				<CancelCreateProgramButton />
			</form>
		)
	}
}

export default connect()(AddProgramForm);
