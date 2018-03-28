import React from 'react';
import { connect } from 'react-redux';

import ProgramsOverview from './programs-overview';
import Header from './header';
import requiresLogin from './requires-login';

import { fetchPrograms } from '../actions/index';
import { fetchProtectedData } from '../actions/protected-data';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() { // Use componentDidRender?  
    this.props.dispatch(fetchProtectedData());
    this.props.dispatch(fetchPrograms());
  }

  render() {
    const headerText = `${this.props.name}'s Workout Programs`
    return (
      <section className="dashboard">
        <Header
          className="dashboard-header"
          text={headerText}
        />
        <ProgramsOverview />
      </section>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    email: state.auth.currentUser.email,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));