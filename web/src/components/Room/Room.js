import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react'
import ReviewList from './ReviewList';

class Room extends Component {

    render() {
        const allReviewsInTheRoom = this.props.roomReducer.reviews;
        const board = this.props.roomReducer.board.boardData;
        const boardOwner = this.props.roomReducer.board.boardOwnerData;
        console.log(boardOwner);
        return(
            <div>
                <Grid centered doubling>
                    <Grid.Column width='12'>
                        {board.board_img!==null?<Image src={board.board_img}/>:<Image src='http://semantic-ui.com/images/wireframe/image.png' />}
                        <h3>{board.board_name!==null?board.board_name:''} </h3>
                        <h5>
                           {boardOwner.user_id!==null?'관리자:'+boardOwner.user_nickname+', ':''}  
                            팔로워:
                           {board.board_popular!==null?board.board_popular:''}명
                        </h5>
                    </Grid.Column>
                </Grid>
                <ReviewList>
                  {allReviewsInTheRoom}
                </ReviewList>
            </div>
        );
    }
}

export default Room;
