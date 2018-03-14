import React from 'react';
import MainHeader from './main-header';
import Description from './description';
import SignupSection from './signup-section';
import './landing-page.css';

export default function LandingPage() {
  return (
    <section>
      <MainHeader />
      <Description />
      <SignupSection />
    </section>   
  )
}