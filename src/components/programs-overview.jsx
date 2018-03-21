import React from 'react';
import { connect } from 'react-redux';

import AddProgramButton from './add-program-button';
import Programs from './programs';
import './programs-overview.css';

export class ProgramsOverview extends React.Component {
  
  render() {
    return (
      <main className="programs">
        <AddProgramButton />
        <Programs programs={this.props.programs} />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  programs: state.programs
});

export default connect(mapStateToProps)(ProgramsOverview);
