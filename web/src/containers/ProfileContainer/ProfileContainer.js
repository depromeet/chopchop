import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import ChopWrapper from '../../components/ChopWrapper';
import * as profileActions from '../../actions/profile';
import { connect } from 'react-redux';

type propTypes = {}
class ProfileContainer extends Component {
  props: propTypes;
  constructor (props) {
    super(props)
    const userId = this.props.match.params.profileId;
    this.props.onGetUserData(userId);
  }

  render() {
    return (
      <ChopWrapper tab="Profile">
        <Profile 
          profileReducer={this.props.profileReducer}
        />
      </ChopWrapper>
    );
  }
}


function mapStateToProps(state) {
  return {
    profileReducer: state.profileReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetUserData: (userId) => dispatch(profileActions.getUserData(userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);