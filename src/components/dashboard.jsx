import React from 'react';
import { connect } from 'react-redux';

import ProgramsOverview from './programs-overview';
import Header from './header';

import { fetchPrograms } from '../actions';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() { // Use componentDidRender?  
    this.props.dispatch(fetchPrograms());
  }

  render() {
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
}

export default connect()(Dashboard);