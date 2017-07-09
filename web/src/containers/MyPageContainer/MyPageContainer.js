// @flow
import React, { Component } from 'react';
import MyPage from '../../components/MyPage/MyPage';
import ChopWrapper from '../../components/ChopWrapper';
import * as myPageActions from '../../actions/myPage';
import { connect } from 'react-redux';

type propTypes = {}

class MyPageContainer extends Component {
  props: propTypes;
  constructor (props) {
    super(props)
    const userId = this.props.authReducer.userInfo.user_id;
    this.props.onGetMyData(userId);
  }

  render() {
    return (
      <ChopWrapper tab="MyPage">
        <MyPage 
          myPageReducer={this.props.myPageReducer}
          authReducer={this.props.authReducer}
        />
      </ChopWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    myPageReducer: state.myPageReducer,
    authReducer: state.authReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetMyData: (userId) => dispatch(myPageActions.getMyData(userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPageContainer);