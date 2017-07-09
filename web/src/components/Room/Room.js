import React, { Component } from 'react';
import { Image, Grid } from 'semantic-ui-react'
import ReviewList from './ReviewList';

class Room extends Component {

    render() {
        const allReviewsInTheRoom = this.props.roomReducer.reviews;

        return(
            <div>
                <Grid centered doubling>
                    <Grid.Column width='12'>
                        <Image src='http://semantic-ui.com/images/wireframe/image.png' fluid shape='rounded' centered />
                        <h3>치즈인더치즈방 </h3>
                        <h5>관리자:ZNE, 팔로워:231명</h5>
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
