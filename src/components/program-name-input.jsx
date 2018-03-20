import React from 'react';

export default function ProgramNameInput(props) {
  return (
    <div>
      <label htmlFor="program-name">Program name</label>
      <input type="text" id="program-name" 
        onChange={event => props.setText(event.target.value)}/>
      <br />
    </div>
  )
}