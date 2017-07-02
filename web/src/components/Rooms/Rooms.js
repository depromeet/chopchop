import React, { Component, PropTypes } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react'
import {
    Route,
    Link
} from 'react-router-dom'
import RoomList from './RoomList'

const propTypes = {

};
const defaultProps = {

};
class Rooms extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const allBoards = this.props.roomsReducer.allBoards;
        const onesBoards = this.props.roomsReducer.onesBoards;
        const roomName = "방제";
        const userId = 14;
        return(
            <div>
                    <div>
                        <h3 onClick={()=> this.props.onMakeNewRoom(roomName, userId)}>
                            방생성
                        </h3>

                        <Header as='h3' dividing>
                            즐겨찾기
                        </Header>

                        <RoomList>
                            {onesBoards}
                        </RoomList>


                        <Header as='h3' dividing>
                            전체방
                        </Header>
                        <RoomList>
                            {allBoards}
                        </RoomList>
                    </div>
            </div>

        );
    }
}

Rooms.propTypes = propTypes;
Rooms.defaultProps = defaultProps;

export default Rooms;
