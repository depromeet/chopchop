// @flow
import React, { Component } from 'react';
import Rooms from '../../components/Rooms/Rooms';
import ChopWrapper from '../../components/ChopWrapper';
import * as roomsActions from '../../actions/rooms';
import { connect } from 'react-redux';

type propTypes = {}
class RoomsContainer extends Component {
  props: propTypes;
  
  constructor(props) {
    super(props)
    const userId = this.props.userId;
    this.props.onGetAllRooms(userId);
    this.props.onGetFollowingRooms(userId);

  }
  
  render() {
    return (
      <ChopWrapper tab="Rooms">
        <Rooms 
          roomsReducer={this.props.roomsReducer}
          userId={this.props.userId}
          onMakeNewRoom={this.props.onMakeNewRoom}
          onMakeRoomMakerVisible={this.props.onMakeRoomMakerVisible}
        />
      </ChopWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    roomsReducer: state.roomsReducer,
    userId: state.authReducer.userInfo.user_id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetAllRooms: (userId) => dispatch(roomsActions.getAllRooms(userId)),
    onGetFollowingRooms: (userId) => dispatch(roomsActions.getFollowingRooms(userId)),
    onMakeNewRoom: (roomName, userId) => dispatch(roomsActions.makeNewRoom(roomName, userId)),
    onMakeRoomMakerVisible: () => dispatch(roomsActions.makeRoomMakerVisible())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);

