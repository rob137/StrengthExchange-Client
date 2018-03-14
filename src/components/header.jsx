import React from 'react';

export default function Header(props) {
  return (
    <header className={props.className}>
      <h2>{props.text}</h2>
    </header>
  )
}


			