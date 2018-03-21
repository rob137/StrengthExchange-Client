import React from 'react';
import { Link } from 'react-router-dom';
import './add-program-button.css';

export default function AddProgramButton() {
  return (
      <Link to="/dashboard/add-program">
        <button className="add-program-button">
          Create new workout program
        </button>
      </Link>
  )
}