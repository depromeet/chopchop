import React, { Component } from 'react';
import { Header, Image, Grid } from 'semantic-ui-react'
import PopularReviewList from './PopularReviewList'

class Home extends Component {

    render() {
        const popularReviews = this.props.homeReducer.popularReviews;

        return(
            <div>
                <Header as='h3' dividing>
                    인기 리뷰
                </Header>
                <PopularReviewList>
                    {popularReviews}
                </PopularReviewList>
            </div>
        );
    }
}


export default Home;
