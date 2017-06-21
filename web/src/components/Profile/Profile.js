import React, { Component, PropTypes } from 'react';
import { Header, Icon, Image, Feed } from 'semantic-ui-react'

const propTypes = {

};
const defaultProps = {

};
class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/15726806_1169155089848051_2754135665369198951_n.jpg?oh=23e6551a4143726e75a13e1269651a02&oe=59482A3A' />
                    <Header.Content>
                        닉네임: {this.props.match.params.profileId}
                    </Header.Content>
                </Header>
                <Image centered size='large' src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />

                <Header as='h3' dividing>
                    지명이 쓴 글
                </Header>
                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Elliot Fu</Feed.User> added you as a friend
                        <Feed.Date>1 Hour Ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />
                          4 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image='http://semantic-ui.com/images/avatar/small/helen.jpg' />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>Helen Troy</a> added <a>2 new illustrations</a>
                        <Feed.Date>4 days ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra images>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />
                          1 Like
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
                    <Feed.Content>
                      <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />
                          8 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image='http://semantic-ui.com/images/avatar/small/joe.jpg' />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>Joe Henderson</a> posted on his page
                        <Feed.Date>3 days ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra text>
                        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                        day soon.
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />
                          5 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image='http://semantic-ui.com/images/avatar/small/justen.jpg' />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                        <Feed.Date>4 days ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra images>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' /></a>
                      </Feed.Extra>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name='like' />
                          41 Likes
                        </Feed.Like>
                      </Feed.Meta>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
            </div>
            );
    }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
