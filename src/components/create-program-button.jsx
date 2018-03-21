import React from 'react';
import { Link } from 'react-router-dom';
import './create-program-button.css';

export default function CreateProgramButton(props) {
  console.log(props.programName);
  const editProgramEndpoint = `${props.programName}/edit-program`;
  return (
      <Link 
        className="create-program-link"
        to={editProgramEndpoint} 
        onClick={() =>props.addProgram()}
      >
        <button className="create-program-button">Create</button>
      </Link>
  )
}