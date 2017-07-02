import React, { Component, PropTypes } from 'react';
import Profile from '../../components/Profile/Profile';
import ChopWrapper from '../../components/ChopWrapper';

type propTypes = {}
class ProfileContainer extends Component {

  props: propTypes;

  render() {
    return (
      <ChopWrapper tab="Profile">
        <Profile />
      </ChopWrapper>
    );
  }
}

export default ProfileContainer;
