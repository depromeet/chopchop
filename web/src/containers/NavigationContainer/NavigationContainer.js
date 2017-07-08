import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import SignOut from '../../components/Auth/SignOut';
import * as authActions from '../../actions/auth';
import * as routerActions from '../../actions/router';
import { connect } from 'react-redux';

class NavigationContainer extends Component {
  render() {
    return (
      <div>
        <Navigation
          tab={this.props.tab}
          onSetUpCurrentPath={this.props.onSetUpCurrentPath}
        />
        <SignOut
          targetPath={this.props.routerReducer.currentPath}
          onSignOut={this.props.onSignOut}
          onSetUpTargetPath={this.props.onSetUpTargetPath}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      routerReducer: state.routerReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSignOut: () => dispatch(authActions.signOut()),
    onSetUpTargetPath: (targetPath) => dispatch(routerActions.setUpTargetPath(targetPath)),
    onSetUpCurrentPath: (currentPath) => dispatch(routerActions.setUpCurrentPath(currentPath)),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);