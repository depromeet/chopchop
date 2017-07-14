import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import ReviewList from '../ReviewList';

class Home extends Component {

    render() {
        const popularReviews = this.props.homeReducer.popularReviews;

        return(
            <div>
                <Header as='h3' dividing>
                    인기 리뷰
                </Header>
                <ReviewList>
                    {popularReviews}
                </ReviewList>
            </div>
        );
    }
}


export default Home;
