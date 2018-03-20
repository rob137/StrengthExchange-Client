import React from 'react';
import { connect } from 'react-redux';

import ProgramNameInput from './program-name-input';
import CreateProgramButton from './create-program-button';
import CancelCreateProgramButton from './cancel-create-program-button';

import { addProgram } from '../actions';

import './add-program-form.css';

export class AddProgramForm extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			text: "test"
		}
	}

	addProgram(name) {
		this.props.dispatch(addProgram(name));
	}

	wipeInput() {
		document.getElementById('program-name').value = '';
	}

	setText(text) {
		this.setState({
		  text
		})
	}

	render() {
		return (
			<form className="horizontal-center">
				<ProgramNameInput setText={this.setText.bind(this)}/>
				<CreateProgramButton addProgram={() => {
					this.addProgram(this.state.text);
					this.wipeInput();
				}}/>
				<CancelCreateProgramButton />
			</form>
		)
	}
}

export default connect()(AddProgramForm);
