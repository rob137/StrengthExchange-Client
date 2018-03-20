import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './create-program-button.css';

export default function CreateProgramButton(props) {
  return (
      <Link 
        className="create-program-link"
        to="edit-program" 
        onClick={() =>props.addProgram()}
      >
        <button className="create-program-button">Create</button>
      </Link>
  )
}