import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props);
    }
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state

        return(
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Link to="/chopchop/">
                        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    </Link>
                    <Link to="/chopchop/rooms">
                        <Menu.Item name='Rooms' active={activeItem === 'Rooms'} onClick={this.handleItemClick} />
                    </Link>
                    <Link to="/chopchop/pinList">
                        <Menu.Item name='PinList' active={activeItem === 'PinList'} onClick={this.handleItemClick} />
                    </Link>
                    <Link to="/chopchop/myPage">
                        <Menu.Item name='MyPage' active={activeItem === 'MyPage'} onClick={this.handleItemClick} />
                    </Link>
                </Menu>
            </Segment>
        );
    }
}


export default Navigation;
