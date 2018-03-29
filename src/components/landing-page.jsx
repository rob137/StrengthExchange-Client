import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import MainHeader from './main-header';
import Description from './description';
import SignupSection from './signup-section';

import './landing-page.css';

export function LandingPage(props) {
  console.log("props.loggedIn:");
  console.log(props.loggedIn);
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section>
      <MainHeader />
      <Description />
      <SignupSection />
    </section>   
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LandingPage);