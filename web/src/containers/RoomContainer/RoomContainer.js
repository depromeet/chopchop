import React, { Component, PropTypes } from 'react';
import Room from '../../components/Room/Room';
import ChopWrapper from '../../components/ChopWrapper';

type propTypes = {}
class RoomContainer extends Component {
  props: propTypes;

  render() {
    return (
      <ChopWrapper tab="Rooms">
        <Room />
      </ChopWrapper>
    );
  }
}

export default RoomContainer;
