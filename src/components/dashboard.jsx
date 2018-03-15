import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import ProgramsOverview from './programs-overview';
import Header from './header';
import './dashboard.css';

export default function Dashboard(props) {
  return (
    <section className="dashboard">
      <Header 
        className="dashboard-header" 
        text="Joe Bloggs' Workout Programs" 
      />
      <ProgramsOverview />
    </section>
  )  
}