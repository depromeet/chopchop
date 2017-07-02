// @flow
import React, { Component, PropTypes } from 'react';
import Rooms from '../../components/Rooms/Rooms';
import ChopWrapper from '../../components/ChopWrapper';
import * as roomsActions from '../../actions/rooms';
import { connect } from 'react-redux';

type propTypes = {}
class RoomsContainer extends Component {
  props: propTypes;
  
  constructor(props) {
    super(props)
    const userId = 1;
    this.props.onGetAllRooms(userId);
    this.props.onGetFollowingRooms(userId);

  }
  
  render() {
    return (
      <ChopWrapper tab="Rooms">
        <Rooms 
          roomsReducer={this.props.roomsReducer}
          onMakeNewRoom={this.props.onMakeNewRoom}
        />
      </ChopWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomsReducer: state.roomsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetAllRooms: (userId) => dispatch(roomsActions.getAllRooms(userId)),
    onGetFollowingRooms: (userId) => dispatch(roomsActions.getFollowingRooms(userId)),
    onMakeNewRoom: (userId) => dispatch(roomsActions.makeNewRoom(userId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);

