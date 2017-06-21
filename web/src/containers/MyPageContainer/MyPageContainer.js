// @flow
import React, { Component } from 'react';
import MyPage from '../../components/MyPage/MyPage';
import ChopWrapper from '../../components/ChopWrapper';

type propTypes = {}

class MyPageContainer extends Component {
  props: propTypes;

  render() {
    return (
      <ChopWrapper>
        <MyPage />
      </ChopWrapper>
    );
  }
}

export default MyPageContainer;
