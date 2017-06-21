import React, { Component } from 'react';
import PinList from '../../components/PinList/PinList';
import ChopWrapper from '../../components/ChopWrapper';

type propTypes = {}

class PinListContainer extends Component {

  props: propTypes;

  render() {
    return (
      <ChopWrapper>
        <PinList />
      </ChopWrapper>
    );
  }
}

export default PinListContainer;
