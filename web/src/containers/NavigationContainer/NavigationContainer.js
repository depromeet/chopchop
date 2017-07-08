import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import SignOut from '../../components/Auth/SignOut';
import * as authActions from '../../actions/auth';
import { connect } from 'react-redux';

class NavigationContainer extends Component {
  render() {
    return (
      <div>
        <Navigation
          tab={this.props.tab}
        />
        <SignOut
          onSignOut={this.props.onSignOut}
        />
      </div>
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
    onSignOut: () => dispatch(authActions.signOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);