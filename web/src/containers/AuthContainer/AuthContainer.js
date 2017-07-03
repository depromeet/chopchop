// @flow
import React, { Component } from 'react';
import ChopWrapper from '../../components/ChopWrapper';
import Auth from '../../components/Auth/Auth';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';


class AuthContainer extends Component {
  render() {
    return (
      <Auth 
        onSignInWithEmail={this.props.onSignInWithEmail}
        onSignUpWithEmail={this.props.onSignUpWithEmail}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
      state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSignInWithEmail: (userSignInInfo) => dispatch(authActions.signInWithEmail()),
    onSignUpWithEmail: (userSignUpInfo) => dispatch(authActions.signUpWithEmail()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
