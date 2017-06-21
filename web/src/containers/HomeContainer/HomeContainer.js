// @flow
import React, { Component } from 'react';
import ChopWrapper from '../../components/ChopWrapper';
import Home from '../../components/Home/Home';


type propTypes = {}

class HomeContainer extends Component {
  props: propTypes;

  render() {
    return (
      <ChopWrapper>
        <Home />
      </ChopWrapper>
    );
  }
}

export default HomeContainer;
