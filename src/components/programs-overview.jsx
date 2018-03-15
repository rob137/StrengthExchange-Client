import React from 'react';
import AddProgramButton from './add-program-button';
import Programs from './programs';
import './programs-overview.css';

export default function ProgramsOverview() {
  return (
      <main className="programs">
      <AddProgramButton />
        <Programs />
      </main>
  )
}