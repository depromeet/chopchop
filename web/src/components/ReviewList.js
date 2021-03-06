import React, { Component } from 'react';
import { Image, Feed, Icon } from 'semantic-ui-react'
import {
    Link
} from 'react-router-dom'

class RoomList extends Component {
    render() {
        const reviews = this.props.children;
        if(reviews.length===0){
            return (
              <h3>존재하지 않습니다.</h3>
            );
        }
        const parsedReviews = reviews.map((review, index) => 
            <Feed.Event  key={index}>
              <Feed.Label>
                <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' role="presentation"/>
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Link to={`/chopchop/profile/`+review.review_uid}>
                    {review.review_nickname!==null?review.review_nickname:''}
                  </Link>
                  님이 남기신 리뷰입니다.
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>
                  <b>{review.review_score!==null?review.review_score:''}점!</b><br/>
                  {review.review_story!==null?review.review_story:''}
                </Feed.Extra>
                <Feed.Extra images>
                  <Link to={`/chopchop/reviews/`+review.review_id}>
                        {review.review_img!==null?<Image src={review.review_img}/>:<Image src='http://semantic-ui.com/images/wireframe/image.png' />}
                        {review.review_img!==null?<Image src={review.review_img}/>:<Image src='http://semantic-ui.com/images/wireframe/image.png' />}
                  </Link>
                </Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name='like outline' />
                    {review.review_like!==null?review.review_like:''}
                    <Icon name='dislike outline' />
                    {review.review_bad!==null?review.review_bad:''}
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>

        );

        return (
                <Feed>
                  { parsedReviews }
                </Feed>

        );
    }
}

export default RoomList;