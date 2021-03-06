import React, { Component } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import Message from '../components/Message/Message'
import Loading from '../components/Loading/Loading'
import AuthContainer from './AuthContainer/AuthContainer'
import HomeContainer from './HomeContainer/HomeContainer';
import MyPageContainer from './MyPageContainer/MyPageContainer';
import PinListContainer from './PinListContainer/PinListContainer';
import RoomsContainer from './RoomsContainer/RoomsContainer';
import RoomContainer from './RoomContainer/RoomContainer';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import ReviewContainer from './ReviewContainer/ReviewContainer';
import * as authActions from '../actions/auth';
import * as routerActions from '../actions/router';

function PrivateRoute ({component: Component, authed, path, ...rest}) {
    if(authed === true){
        return <Route exact path={path} component={Component}/>
    }else{
        return <Redirect from={path} to='/chopchop/login'/>
    }
}

function PublicRoute ({component: Component, authed, authedLoading, targetPath, path, ...rest}) {
    if(authedLoading === true) {
        return null
    }else if(authed === false){
        return <Route exact path={path} component={Component}/>
    }else{
        return <Redirect from={path} to={targetPath}/>
    }
}

class RootRoute extends Component {
    
    constructor(props){
        super(props);
        const authed = window.sessionStorage.getItem("authed");
        const userId = window.sessionStorage.getItem("userId");
        const targetPath = props.location.pathname!=='/chopchop/login'?props.location.pathname:'/chopchop/';
        if(authed==="true"){
            this.props.onGetUserInfoWithSession(userId, targetPath);
        }else{
            this.props.onDetectNoSession(targetPath)
            this.props.onSetUpTargetPath(targetPath)
        }
    }
    render() {
        const authed = this.props.authReducer.authed;
        const authedLoading = this.props.authReducer.authedLoading;
        const targetPath = this.props.routerReducer.targetPath;
        return(
          <div>
            <Switch>
                  <PublicRoute
                    path='/chopchop/login'
                    authed={authed}
                    authedLoading={authedLoading}
                    component={AuthContainer}
                    targetPath={targetPath}
                    />
                  <PrivateRoute exact path="/chopchop/" component={HomeContainer} authed={authed}/>
                  <PrivateRoute path="/chopchop/rooms/:roomId" component={RoomContainer} authed={authed}/>
                  <PrivateRoute exact path="/chopchop/rooms" component={RoomsContainer} authed={authed}/>
                  <PrivateRoute path="/chopchop/pinList" component={PinListContainer} authed={authed}/>
                  <PrivateRoute path="/chopchop/myPage" component={MyPageContainer} authed={authed}/>
                  <PrivateRoute path="/chopchop/reviews/:reviewId" component={ReviewContainer} authed={authed}/>
                  <PrivateRoute path="/chopchop/profile/:profileId" component={ProfileContainer} authed={authed}/>
            </Switch>
            <Message visible={this.props.messageReducer.messageVisibility} message={this.props.messageReducer.message}/>
            <Loading visible={authedLoading}/>

          </div>
        );
    }
}
function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    routerReducer: state.routerReducer,
    messageReducer: state.messageReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
       onGetUserInfoWithSession: (userId, targetPath) => dispatch(authActions.getUserInfoWithSession(userId, targetPath)),
       onDetectNoSession: () => dispatch(authActions.detectNoSession()),
       onSetUpTargetPath: (targetPath) => dispatch(routerActions.setUpTargetPath(targetPath)),
  };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RootRoute));
