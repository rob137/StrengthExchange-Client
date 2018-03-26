import React from 'react';
import './delete-program-button.css';
import { Link } from 'react-router-dom';

export default function DeleteProgramButton(props) {
  return (
    <Link to="/dashboard">
      <button 
        className="delete-program-button"
        onClick={() => props.deleteProgram()}
      >
        Delete this workout program
      </button> 
    </Link>
  )
}

