import React, { Component } from 'react';
import { Header, Icon, Image, Feed } from 'semantic-ui-react'
import ReviewList from '../ReviewList';

class MyPage extends Component {

    render() {
      const userInfo = this.props.authReducer.userInfo
      const reviews = this.props.myPageReducer.reviews
        return(
            <div>
                <Header as='h2' icon textAlign='center'>
                    {userInfo.user_image!==null?<Image src={userInfo.user_image} shape='circular' size='small' bordered />:<Image src='http://semantic-ui.com/images/wireframe/image.png' shape='circular' size='small' bordered />}
                    <Header.Content>
                        {userInfo.user_nickname!==null?userInfo.user_nickname:''}
                    </Header.Content>
                </Header>
                <Image centered size='large' src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />

                <Header as='h3' dividing>
                    {userInfo.user_nickname!==null?userInfo.user_nickname:''}님이 쓴 글
                </Header>
                <ReviewList>
                  {reviews}
                </ReviewList>

            </div>
            );
    }
}

export default MyPage;
