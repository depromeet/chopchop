import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import RoomList from './RoomList'
import RoomMaker from './RoomMaker'

class Rooms extends Component {

    render() {
        const allBoards = this.props.roomsReducer.allBoards;
        const followingBoards = this.props.roomsReducer.followingBoards;
        const roomMakerVisible= this.props.roomsReducer.roomMakerVisibility;
        const onMakeRoomMakerVisible = this.props.onMakeRoomMakerVisible;
        const onMakeRoomMakerUnvisible = this.props.onMakeRoomMakerUnvisible;

        return(
            <div>
                    <div>
                        <h3 
                            onClick={function(e){
                                if (roomMakerVisible === false) return onMakeRoomMakerVisible()
                                else return onMakeRoomMakerUnvisible()
                            }}>
                            방생성
                        </h3>
                        <RoomMaker
                            onMakeNewRoom={this.props.onMakeNewRoom}
                            visible={roomMakerVisible}
                            userId={this.props.userId}
                        />

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
