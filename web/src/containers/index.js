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

function PrivateRoute ({component: Component, authed, authedLoading, path, ...rest}) {
    if(authed === true){
        return <Route exact path={path} component={Component}/>
    }else{
        return <Redirect from={path} to='/chopchop/login'/>
    }
}

function PublicRoute ({component: Component, authed, path, ...rest}) {
    if(authed === false){
        return <Route exact path={path} component={Component}/>
    }else{
        return <Redirect from={path} to='/chopchop/'/>
    }
}

class RootRoute extends Component {

    render() {
        const authed = this.props.authReducer.authed;
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
                <Message visible={this.props.authReducer.messageVisibility} message={this.props.authReducer.message}/>
            </Container>
          </div>
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
  };
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RootRoute));
