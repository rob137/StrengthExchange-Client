import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './close-sidebar-widget.css';

export default function CloseSidebarWidget(props) {
  const endpoint = props.endpoint;
  
  return (
    <Link to={endpoint}>
      <a id="close-sidebar-widget" className="close-sidebar-widget 
                    vertical-center"
      >
        > 
      </a>
    </Link>
  )
}
