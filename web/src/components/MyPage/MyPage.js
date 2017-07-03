import React, { Component } from 'react';
import { Header, Icon, Image, Feed } from 'semantic-ui-react'

class MyPage extends Component {

    render() {
        return(
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/18952672_1325477787549113_3739752028675042452_n.jpg?oh=096986f94b4d73c056abb51ec407de01&oe=59E784F1' />
                    <Header.Content>
                        닉네임: 지명
                    </Header.Content>
                </Header>
                <Image centered size='large' src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />

                <Header as='h3' dividing>
                    지명이 쓴 글
                </Header>
                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' role="presentation"/>
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Elliot Fu</Feed.User> added you as a friend
                        <Feed.Date>1 Hour Ago</Feed.Date>
                      </Feed.Summary>
                      <Feed.Extra text>
                        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                        day soon.
                      </Feed.Extra>
                      <Feed.Extra images>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
                      </Feed.Extra>
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
                      <Feed.Extra text>
                        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                        day soon.
                      </Feed.Extra>
                      <Feed.Extra images>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
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
                      <Feed.Extra text>
                        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                        day soon.
                      </Feed.Extra>
                      <Feed.Extra images>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
                      </Feed.Extra>
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
                      <Feed.Extra images>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
                      </Feed.Extra>
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
                      <Feed.Extra text>
                        Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                        over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                        day soon.
                      </Feed.Extra>
                      <Feed.Extra images>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
                        <a><img src='http://semantic-ui.com/images/wireframe/image.png' role="presentation"/></a>
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

export default MyPage;
