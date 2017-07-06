import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import Message from '../components/Message/Message'
import AuthContainer from './AuthContainer/AuthContainer'
import HomeContainer from './HomeContainer/HomeContainer';
import MyPageContainer from './MyPageContainer/MyPageContainer';
import PinListContainer from './PinListContainer/PinListContainer';
import RoomsContainer from './RoomsContainer/RoomsContainer';
import RoomContainer from './RoomContainer/RoomContainer';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import ReviewContainer from './ReviewContainer/ReviewContainer';
import * as authActions from '../actions/auth';

function PrivateRoute ({component: Component, authed, authedLoading, path, ...rest}) {
    if(authed === true){
        console.log("PrivateRoute True");
        return <Route exact path={path} component={Component}/>
    }else{
        console.log("PrivateRoute False , Redirect");
        return <Redirect from={path} to='/chopchop/login'/>
    }
}

function PublicRoute ({component: Component, authed, path, ...rest}) {
    if(authed === false){
        console.log("PublicRoute True");
        return <Route exact path={path} component={Component}/>
    }else{
        console.log("PublicRoute False, Redirect");
        return <Redirect from={path} to='/chopchop/'/>
    }
}

class RootRoute extends Component {
    
    componentWillMount() {
        const authed = window.sessionStorage.getItem("authed");
        const userId = window.sessionStorage.getItem("userId");
        if(authed==="true"){
            this.props.onGetUserInfo(userId);
        }
        console.log("cwm authed "+authed);
    }
    
    
    render() {
        const authed = this.props.authReducer.authed;
        console.log("render authed "+authed);
        return(
          <div>
            <Container text>
                <PublicRoute
                  path='/chopchop/login'
                  authed={authed}
                  component={AuthContainer}
                  />
                <PrivateRoute exact path="/chopchop/" component={HomeContainer} authed={authed}/>
                <PrivateRoute path="/chopchop/rooms/:roomId" component={RoomContainer} authed={authed}/>
                <PrivateRoute exact path="/chopchop/rooms" component={RoomsContainer} authed={authed}/>
                <PrivateRoute path="/chopchop/pinList" component={PinListContainer} authed={authed}/>
                <PrivateRoute path="/chopchop/myPage" component={MyPageContainer} authed={authed}/>
                <PrivateRoute path="/chopchop/reviews/:reviewId" component={ReviewContainer} authed={authed}/>
                <PrivateRoute path="/chopchop/profile/:profileId" component={ProfileContainer} authed={authed}/>
                <Message visible={this.props.messageReducer.messageVisibility} message={this.props.messageReducer.message}/>
            </Container>
          </div>
        );
    }
}
function mapStateToProps(state) {
  return {
    authReducer: state.authReducer,
    messageReducer: state.messageReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
       onGetUserInfo: (userId) => dispatch(authActions.getUserInfo(userId)),
  };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RootRoute));
