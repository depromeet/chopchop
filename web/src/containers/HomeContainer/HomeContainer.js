// @flow
import React, { Component } from 'react';
import ChopWrapper from '../../components/ChopWrapper';
import Home from '../../components/Home/Home';
import { connect } from 'react-redux';


type propTypes = {}

class HomeContainer extends Component {
  props: propTypes;

  render() {
    return (
      <ChopWrapper tab="Home">
        <Home/>
      </ChopWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
      state
  };
}

function mapDispatchToProps(dispatch) {
  return {
  
};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
