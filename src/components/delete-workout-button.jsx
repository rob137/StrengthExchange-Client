import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function DeleteWorkoutButton() {
  return <Link to="/dashboard/edit-program/:programName"><button>Delete this workout</button></Link>
}
