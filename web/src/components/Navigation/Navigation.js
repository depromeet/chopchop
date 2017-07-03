import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navigation extends Component {

    render() {
        const activeItem = this.props.tab;
        return(
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Link to="/chopchop/">
                        <Menu.Item name='Home' active={activeItem === 'Home'} />
                    </Link>
                    <Link to="/chopchop/rooms">
                        <Menu.Item name='Rooms' active={activeItem === 'Rooms'} />
                    </Link>
                    <Link to="/chopchop/pinList">
                        <Menu.Item name='PinList' active={activeItem === 'PinList'} />
                    </Link>
                    <Link to="/chopchop/myPage">
                        <Menu.Item name='MyPage' active={activeItem === 'MyPage'} />
                    </Link>
                </Menu>
            </Segment>
        );
    }
}


export default Navigation;
