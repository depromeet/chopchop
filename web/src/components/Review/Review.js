import React, { Component } from 'react';
import { Image, Grid, Feed, Icon, Header, Form, Button, Comment } from 'semantic-ui-react'

class Review extends Component {
    render() {
        const review = this.props.reviewReducer.review
        return(
            <div>
                <Grid centered doubling>
                    <Grid.Column width='12'>
                        {review.review_img!==null?<Image src={review.review_img} size='medium' shape='rounded' centered />:<Image src='http://semantic-ui.com/images/wireframe/image.png' size='medium' shape='rounded' centered />}
                        <Feed>
                          <Feed.Event>
                            <Feed.Label>
                              <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' role="presentation" />
                            </Feed.Label>
                            <Feed.Content>
                              <Feed.Summary>
                                <Feed.User>{review.review_nickname!==null?review.review_nickname:''}</Feed.User> 님이 남기신 리뷰입니다.
                                <Feed.Date>1 Hour Ago</Feed.Date>
                              </Feed.Summary>
                              <Feed.Extra text>
                                <b>{review.review_score!==null?review.review_score:''}점!</b><br/>
                                {review.review_story!==null?review.review_story:''}
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
                        </Feed>
                    </Grid.Column>
                </Grid>
                <Comment.Group>
                   <Header as='h3' dividing>Comments</Header>

                   <Comment>
                     <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
                     <Comment.Content>
                       <Comment.Author as='a'>Matt</Comment.Author>
                       <Comment.Metadata>
                         <div>Today at 5:42PM</div>
                       </Comment.Metadata>
                       <Comment.Text>How artistic!</Comment.Text>
                       <Comment.Actions>
                         <Comment.Action>Reply</Comment.Action>
                       </Comment.Actions>
                     </Comment.Content>
                   </Comment>

                   <Comment>
                     <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
                     <Comment.Content>
                       <Comment.Author as='a'>Elliot Fu</Comment.Author>
                       <Comment.Metadata>
                         <div>Yesterday at 12:30AM</div>
                       </Comment.Metadata>
                       <Comment.Text>
                         <p>This has been very useful for my research. Thanks as well!</p>
                       </Comment.Text>
                       <Comment.Actions>
                         <Comment.Action>Reply</Comment.Action>
                       </Comment.Actions>
                     </Comment.Content>
                     <Comment.Group>
                       <Comment>
                         <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
                         <Comment.Content>
                           <Comment.Author as='a'>Jenny Hess</Comment.Author>
                           <Comment.Metadata>
                             <div>Just now</div>
                           </Comment.Metadata>
                           <Comment.Text>
                             Elliot you are always so right :)
                           </Comment.Text>
                           <Comment.Actions>
                             <Comment.Action>Reply</Comment.Action>
                           </Comment.Actions>
                         </Comment.Content>
                       </Comment>
                     </Comment.Group>
                   </Comment>

                   <Comment>
                     <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/joe.jpg' />
                     <Comment.Content>
                       <Comment.Author as='a'>Joe Henderson</Comment.Author>
                       <Comment.Metadata>
                         <div>5 days ago</div>
                       </Comment.Metadata>
                       <Comment.Text>
                         Dude, this is awesome. Thanks so much
                       </Comment.Text>
                       <Comment.Actions>
                         <Comment.Action>Reply</Comment.Action>
                       </Comment.Actions>
                     </Comment.Content>
                   </Comment>

                   <Form reply onSubmit={e => e.preventDefault()}>
                     <Form.TextArea />
                     <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                   </Form>
                 </Comment.Group>
            </div>
        );
    }
}

export default Review;
