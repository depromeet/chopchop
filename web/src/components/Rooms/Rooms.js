import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import RoomList from './RoomList'
import RoomMaker from './RoomMaker'

class Rooms extends Component {

    render() {
        const allBoards = this.props.roomsReducer.allBoards;
        const followingBoards = this.props.roomsReducer.followingBoards;
        return(
            <div>
                    <div>
                        <h3 
                            onClick={()=> this.props.onMakeRoomMakerVisible()}
                            >
                            방생성
                        </h3>
                        <RoomMaker
                            onMakeNewRoom={this.props.onMakeNewRoom}
                            visible={this.props.roomsReducer.roomMakerVisibility}
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
