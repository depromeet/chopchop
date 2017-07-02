import React, { Component, PropTypes } from 'react';
import Rooms from '../../components/Rooms/Rooms';
import ChopWrapper from '../../components/ChopWrapper';
import * as roomsActions from '../../actions/rooms';
import { connect } from 'react-redux';

type propTypes = {}
class RoomsContainer extends Component {
  props: propTypes;

  render() {
    return (
      <ChopWrapper>
        <Rooms 
          roomsReducer={this.props.roomsReducer}
          onGetAllRooms={this.props.onGetAllRooms}
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
    onGetAllRooms: (userId) => dispatch(roomsActions.getAllRooms(userId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);

