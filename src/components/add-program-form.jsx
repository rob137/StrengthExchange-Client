import React from 'react';
import ProgramNameInput from './program-name-input';
import CreateProgramButton from './create-program-button';
import CancelCreateProgramButton from './cancel-create-program-button';
import './add-program-form.css';

export default function AddProgramForm() {
	return (
		<form className="horizontal-center">
			<ProgramNameInput />
			<CreateProgramButton />
			<CancelCreateProgramButton />
		</form>
	)
}
