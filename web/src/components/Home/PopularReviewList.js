import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import {
    Link
} from 'react-router-dom'

class PopularReviewList extends Component {
    render() {
        const popularReviews = this.props.children;
        if(popularReviews===undefined){
            return null;
        }
        const parsedPopularReviews = popularReviews.map((review, index) => 
            <Grid.Row key={index}>
                <Grid.Column width={3}>
                    <Link to={`/chopchop/rooms/`+review.review_id}>
                        {review.review_img!==null?<Image src={review.review_img}/>:<Image src='http://semantic-ui.com/images/wireframe/image.png' />}
                    </Link>
                </Grid.Column>
                <Grid.Column width={13}>
                    리뷰: 
                    <Link to={`/chopchop/rooms/`+review.review_id}>
                        {review.review_story!==null?review.review_story:''}
                    </Link>
                    <br/>
                    식당: {review.review_resname!==null?review.review_resname:'없음'}
                    <br/>
                    게시판id: {review.review_boardid!==null?review.review_boardid:'없음'}
                    <br/>
                    👍: {review.review_like!==null?review.review_like:'0'}
                    <br/>
                    👎: {review.review_bad!==null?review.review_bad:'0'}
                    <br/>
                    작성자: {review.review_nickname!==null?review.review_nickname:'null'}
                </Grid.Column>
            </Grid.Row>
        );

        return (
            <Grid celled>
                {parsedPopularReviews}
            </Grid>
        );
    }
}

export default PopularReviewList;