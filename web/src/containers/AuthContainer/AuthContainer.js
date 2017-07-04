// @flow
import React, { Component } from 'react';
import Auth from '../../components/Auth/Auth';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';


class AuthContainer extends Component {
  render() {
    return (
      <Auth 
        onSignInWithEmail={this.props.onSignInWithEmail}
        onSignUpWithEmail={this.props.onSignUpWithEmail}
        onVerifyEmail={this.props.onVerifyEmail}
        authReducer={this.props.authReducer}
        onMakeSignInVisible={this.props.onMakeSignInVisible}
        onMakeSignInUnvisible={this.props.onMakeSignInUnvisible}
        onMakeSignUpVisible={this.props.onMakeSignUpVisible}
        onMakeSignUpUnvisible={this.props.onMakeSignUpUnvisible}
        onAuthShowMessage={this.props.onAuthShowMessage}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSignInWithEmail: (userSignInInfo) => dispatch(authActions.signInWithEmail(userSignInInfo)),
    onSignUpWithEmail: (userSignUpInfo) => dispatch(authActions.signUpWithEmail(userSignUpInfo)),
    onVerifyEmail: (emailAddress) => dispatch(authActions.verifyEmail(emailAddress)),
    onMakeSignInVisible: () => dispatch(authActions.makeSignInVisible()),
    onMakeSignInUnvisible: () => dispatch(authActions.makeSignInUnvisible()),
    onMakeSignUpVisible: () => dispatch(authActions.makeSignUpVisible()),
    onMakeSignUpUnvisible: () => dispatch(authActions.makeSignUpUnvisible()),
    onAuthShowMessage: (message) => dispatch(authActions.authShowMessage(message)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
