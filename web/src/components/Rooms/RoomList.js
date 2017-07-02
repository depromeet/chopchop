import React, { Component } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react'
import {
    Route,
    Link
} from 'react-router-dom'

class RoomList extends Component {
    render() {
        const boards = this.props.children;
        const parsedBoards = boards.map((board, index) => 
            <Grid.Row key={index}>
                <Grid.Column width={3}>
                    <Link to={`/chopchop/rooms/`+board.board_id}>
                        {board.board_img!==null?<Image src={board.board_img}/>:<Image src='http://semantic-ui.com/images/wireframe/image.png' />}
                    </Link>
                </Grid.Column>
                <Grid.Column width={13}>
                    방제: 
                    <Link to={`/chopchop/rooms/`+board.board_id}>
                        {board.board_name!==null?board.board_name:''}
                    </Link>
                    <br/>
                    카테고리: {board.board_catagory!==null?board.board_catagory:'없음'}
                    <br/>
                    👍: {board.board_popular!==null?board.board_popular:'0'}
                    <br/>
                    주인: {board.board_uid!==null?board.board_uid:'null'}
                </Grid.Column>
            </Grid.Row>
        );

        return (
            <Grid celled>
                {parsedBoards}
            </Grid>
        );
    }
}

export default RoomList;