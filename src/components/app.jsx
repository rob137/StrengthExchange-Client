import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';

import LandingPage from './landing-page';
import Footer from './footer'; 
import Nav from './nav';
import Dashboard from './dashboard';
import AddProgramSidebar from './add-program-sidebar';
import EditProgramSidebar from './edit-program-sidebar';
import EditWorkoutSidebar from './edit-workout-sidebar';
import ScreenShader from './screen-shader';

import { refreshAuthToken } from '../actions/auth';
import { fetchPrograms } from '../actions';

import './app.css';

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // one hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }
  
  render() {
    return (
      <Router>
        <div className="app">

          <Route exact path="/" component={LandingPage} />
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
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));