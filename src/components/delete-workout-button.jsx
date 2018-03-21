import React from 'react';
import { Link } from 'react-router-dom';

export default function DeleteWorkoutButton() {
  return <Link to="/dashboard/edit-program/:programName"><button>Delete this workout</button></Link>
}
