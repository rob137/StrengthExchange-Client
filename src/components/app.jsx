import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import LandingPage from './landing-page';
import Footer from './footer'; 
import Nav from './nav';
import Dashboard from './dashboard';
import AddProgramSidebar from './add-program-sidebar';
import EditProgramSidebar from './edit-program-sidebar';
import EditWorkoutSidebar from './edit-workout-sidebar';
import ScreenShader from './screen-shader';

import { fetchPrograms } from '../actions';

import './app.css';

export default function App(props) {  
  let loggedIn = false;

  return (
    <Router>
      <div className="app">
        
        <Route exact path="/" render={() => (
          loggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <Redirect to="/signup" />
          )
        )} />
        <Route exact path="/signup" component={LandingPage} />
        <Route path="/dashboard" component={Nav} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/:sidebar" component={ScreenShader} />

        <Route exact path="/dashboard/add-program" component={AddProgramSidebar} />
        {/* <Route exact path="/dashboard/add-program/:dayNumber/edit-workout" component={EditProgramSidebar} /> */}
        <Route path="/dashboard/:programTitle/edit-program" component={EditProgramSidebar} refreshDashboard={() => this.props.dispatch(fetchPrograms())} />
        <Route path="/dashboard/:programTitle/edit-program/edit-workout/:dayNum" component={EditWorkoutSidebar} />
        <Footer />       
      </div>
    </Router>
  )
};
