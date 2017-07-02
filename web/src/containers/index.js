import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import HomeContainer from './HomeContainer/HomeContainer';
import MyPageContainer from './MyPageContainer/MyPageContainer';
import PinListContainer from './PinListContainer/PinListContainer';
import RoomsContainer from './RoomsContainer/RoomsContainer';
import RoomContainer from './RoomContainer/RoomContainer';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import ReviewContainer from './ReviewContainer/ReviewContainer';

import Room from '../components/Room/Room';
const propTypes = {

};
const defaultProps = {

};
class Body extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
            <Container text>
                <Route exact path="/chopchop/" component={HomeContainer}/>
                <Route path="/chopchop/rooms/:roomId" component={RoomContainer}/>
                <Route exact path="/chopchop/rooms" component={RoomsContainer}/>
                <Route path="/chopchop/pinList" component={PinListContainer}/>
                <Route path="/chopchop/myPage" component={MyPageContainer}/>
                <Route path="/chopchop/reviews/:reviewId" component={ReviewContainer}/>
                <Route path="/chopchop/profile/:profileId" component={ProfileContainer}/>
            </Container>
          </div>
        );
    }
}

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default Body;
