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
  const page = "AddProgramSidebar";

  if (page ==="LandingPage") {
    return (
      <div>
        <LandingPage />
        <Footer />
      </div>
    )
  } else if (page ==="Dashboard") {
    return (
      <div>
        <Nav />
        <Dashboard />
        <Footer />
      </div>
    )
  } else if (page === "AddProgramSidebar") {
    return (
      <div>
        <Nav />
        <Dashboard />
        <ScreenShader />
        <AddProgramSidebar />
        <Footer />
      </div>
    )
  } else if (page ==="EditProgramSidebar") {
    return (
      <div>
        <Nav />
        <Dashboard />
        <ScreenShader />
        <EditProgramSidebar />
        <Footer />
      </div>
    )
  } else if (page === "EditWorkoutSidebar")
    return (
      <div>
        <Nav />
        <Dashboard />
        <ScreenShader />
        <EditProgramSidebar />
        <EditWorkoutSidebar />
        <Footer />
      </div>
  )
};