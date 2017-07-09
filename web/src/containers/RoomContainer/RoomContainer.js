import React, { Component } from 'react';
import Room from '../../components/Room/Room';
import ChopWrapper from '../../components/ChopWrapper';
import * as roomActions from '../../actions/room';
import { connect } from 'react-redux';

type propTypes = {}
class RoomContainer extends Component {
  props: propTypes;
  constructor (props) {
    super(props)
    // const userId = this.props.userId;
    // this.props.onGetAllRooms(userId);
    // this.props.onGetFollowingRooms(userId);

    const roomId = this.props.match.params.roomId;
    this.props.onGetRoomDataInTheRoom(roomId);
  }
  
  render() {
    return (
      <ChopWrapper tab="Rooms">
        <Room 
            roomReducer={this.props.roomReducer}
        />
      </ChopWrapper>
    );
  }
}


function mapStateToProps(state) {
  return {
    roomReducer: state.roomReducer,
    userId: state.authReducer.userInfo.user_id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRoomDataInTheRoom: (roomId) => dispatch(roomActions.getRoomDataInTheRoom(roomId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
