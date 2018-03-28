import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupText() {
  return (
    <div>
      <h2>Sign Up</h2>
      <p>
        Already registered? Click <Link to="/login">here</Link> to sign in
      </p>
    </div>
  )
}

