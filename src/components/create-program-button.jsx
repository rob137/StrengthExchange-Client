import React from 'react';

export default function CreateProgramButton(props) {
  return (
    <button 
      className="create-program-button"
      onClick={(e) => {
        e.preventDefault();
        props.addProgram();
      }}
    >
      Create
    </button>
  )
}