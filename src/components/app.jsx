import React from 'react';
import LandingPage from './landing-page';
import Footer from './footer'; 
import Nav from './nav';
import Dashboard from './dashboard';
import AddProgramSidebar from './add-program-sidebar';
import EditProgramSidebar from './edit-program-sidebar';
import EditWorkoutSidebar from './edit-workout-sidebar';
// Rendering of screenshader will depend on state
import ScreenShader from './screen-shader';

import './app.css';

export default function App() {
  return (
    <div>

      {/* 
      <LandingPage />
      <Footer />
      */}

      <Nav />
      <Dashboard />
      <ScreenShader />
      <EditProgramSidebar />
      {/* <AddProgramSidebar /> */}
      <EditWorkoutSidebar />
      <Footer />
    </div>
  )
};