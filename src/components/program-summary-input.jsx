import React from 'react';

export default function ProgramSummaryInput(props) {
  return (
    <div>
      <label htmlFor="program-summary">Program Summary (optional)</label>
      <textarea id="program-summary" 
        onChange={(event) => props.setProgramSummary(event.target.value)}
      />
    </div>
  );
}