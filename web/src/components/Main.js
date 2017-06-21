import React, { Component, PropTypes } from 'react';
import Counter from './Counter';
import Home from './Home';
import Rooms from './Rooms';
import Room from './Room';
import PinList from './PinList';
import MyPage from './MyPage';
import Review from './Review';
import NotFound from './NotFound';
import Nav from './Nav';
import Profile from './Profile';
import {
  Route,
  Link
} from 'react-router-dom'
import { Grid, Container } from 'semantic-ui-react'


const propTypes = {

};
const defaultProps = {

};
class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Container text>
                        <Nav/>

                        <Route exact path="/chopchop/" component={Home}/>
                        <Route path="/chopchop/rooms" component={Rooms}/>
                        <Route path="/chopchop/pinList" component={PinList}/>
                        <Route path="/chopchop/myPage" component={MyPage}/>
                        <Route path="/chopchop/rooms/:roomId" component={Room}/>
                        <Route path="/chopchop/reviews/:reviewId" component={Review}/>
                        <Route path="/chopchop/profile/:profileId" component={Profile}/>

                </Container>
            </div>
        );
    }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
