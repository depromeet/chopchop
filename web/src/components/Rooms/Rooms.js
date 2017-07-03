import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import RoomList from './RoomList'

class Rooms extends Component {

    render() {
        const allBoards = this.props.roomsReducer.allBoards;
        const followingBoards = this.props.roomsReducer.followingBoards;
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
                            {followingBoards}
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

export default Rooms;
