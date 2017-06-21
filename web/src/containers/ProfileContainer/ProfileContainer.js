import React, { Component, PropTypes } from 'react';
import Profile from '../../components/Profile/Profile';
import ChopWrapper from '../../components/ChopWrapper';

type propTypes = {}
class ProfileContainer extends Component {

  props: propTypes;

  render() {
    return (
      <ChopWrapper>
        <Profile />
      </ChopWrapper>
    );
  }
}

export default ProfileContainer;
