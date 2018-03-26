import React from 'react';
import { Link } from 'react-router-dom';
import './close-sidebar-widget.css';

export default function CloseSidebarWidget(props) {
  const endpoint = props.endpoint;
  return (
    <Link to={endpoint} 
      id="close-sidebar-widget" 
      onClick={() => props.clickEvent()}
      className="close-sidebar-widget vertical-center">
      >
    </Link>
  )
}
