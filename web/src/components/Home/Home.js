import React, { Component, PropTypes } from 'react';
import { Header, Image, Grid, Segment, Icon, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const propTypes = {

};
const defaultProps = {

};
class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const square = { width: 175, height: 175 }
        return(
            <div>
                <Grid centered>
                    <Grid.Column width='8'>
                        <Image src='http://semantic-ui.com/images/wireframe/image.png' size='medium' shape='rounded' centered />
                        <br/>
                        <br/>
                        <br/>
                    </Grid.Column>
                </Grid>
                <Header as='h3' dividing>
                    이 구역의 네임드
                </Header>
                <Grid centered columns={4}>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/18952672_1325477787549113_3739752028675042452_n.jpg?oh=096986f94b4d73c056abb51ec407de01&oe=59E784F1' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/18952672_1325477787549113_3739752028675042452_n.jpg?oh=096986f94b4d73c056abb51ec407de01&oe=59E784F1' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                </Grid>
                <Grid centered columns={4}>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/18952672_1325477787549113_3739752028675042452_n.jpg?oh=096986f94b4d73c056abb51ec407de01&oe=59E784F1' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/18952672_1325477787549113_3739752028675042452_n.jpg?oh=096986f94b4d73c056abb51ec407de01&oe=59E784F1' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' icon textAlign='center'>
                            <Link to={'/chopchop/Profile/1'}>
                                <Image shape='circular' size='small' bordered src='https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/18952672_1325477787549113_3739752028675042452_n.jpg?oh=096986f94b4d73c056abb51ec407de01&oe=59E784F1' />
                            </Link>
                            지명
                        </Header>
                    </Grid.Column>
                </Grid>
                <Header as='h3' dividing>
                    인기 방
                </Header>
                    <Grid centered columns={3}>
                        <Grid.Column>
                            <Card>
                                <Link to={`/chopchop/rooms/1`}>
                                    <Image src='http://taiwangolf.net/wp-content/uploads/2014/02/IMG_2740.jpg' />
                                </Link>
                                <Card.Content>
                                    <Card.Header>
                                        고오급 레스토랑에 갈까?
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>
                                            Joined in 2015
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                      Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Followers
                                    </a>
                              </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <Link to={`/chopchop/rooms/1`}>
                                    <Image src='http://cfile21.uf.tistory.com/image/261E9738547B002823ACAD' />
                                </Link>
                                <Card.Content>
                                    <Card.Header>
                                        핫플하면 신촌이지
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>
                                            Joined in 2015
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Followers
                                    </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <Link to={`/chopchop/rooms/1`}>
                                    <Image src='http://img.ezmember.co.kr/cache/board/2013/12/19/789dce9085553cf4ebb3cb9df8eb3034.jpg' />
                                </Link>
                                <Card.Content>
                                    <Card.Header>
                                        고기는 샐러드와 함께하자
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>
                                            Joined in 2015
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Followers
                                    </a>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid>
                <Header as='h3' dividing>
                    인기 리뷰
                </Header>
                <Grid celled>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={13}>
                      <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={13}>
                      <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                    </Grid.Column>
                    <Grid.Column width={13}>
                      <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                    </Grid.Column>
                  </Grid.Row>
              </Grid>
            </div>
        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
