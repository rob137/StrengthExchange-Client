import React from 'react';

import SignupText from './signup-text';
import SignupForm from './signup-form';

export default function Signup() {
  return (
    <section className="login-signup">
      <SignupText />
      <div className="form-wrapper horizontal-center">
        <SignupForm />
      </div>
    </section>
  )
}
	