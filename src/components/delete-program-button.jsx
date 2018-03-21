import React from 'react';
import './delete-program-button.css';
import { Link } from 'react-router-dom';

export default function DeleteProgramButton() {
  return (
    <Link to="/dashboard">
      <button className="delete-program-button">Delete this workout program</button> 
    </Link>
  )
}

