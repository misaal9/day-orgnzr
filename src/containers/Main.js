import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = state => {
  console.log(state);
  return {
    sample: state.sample
  }
}

export default connect(mapStateToProps)(Main);
