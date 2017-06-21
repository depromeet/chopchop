import React, { Component, PropTypes } from 'react';
import Rooms from '../../components/Rooms/Rooms';
import ChopWrapper from '../../components/ChopWrapper';
type propTypes = {}
class RoomsContainer extends Component {
  props: propTypes;

  render() {
    return (
      <ChopWrapper>
        <Rooms />
      </ChopWrapper>
    );
  }
}

export default RoomsContainer;
