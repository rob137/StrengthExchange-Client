import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function CancelCreateProgramButton() {
  return (
    <Link to="/dashboard">
      <button className="cancel-create-program-button">
        Cancel
      </button>
    </Link>
  )  
}
