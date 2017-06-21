import React, { Component, PropTypes } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react'
import {
    Route,
    Link
} from 'react-router-dom'

const propTypes = {

};
const defaultProps = {

};
class Rooms extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                    <div>
                        <Header as='h3' dividing>
                            즐겨찾기
                        </Header>

                        <Grid celled>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Link to={`/chopchop/rooms/1`}>
                                        <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                                    </Link>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <Link to={`/chopchop/rooms/1`}>
                                        <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                    </Link>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Link to={`/chopchop/rooms/1`}>
                                        <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                                    </Link>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <Link to={`/chopchop/rooms/1`}>
                                        <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                    </Link>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>


                        <Header as='h3' dividing>
                            전체방
                        </Header>

                        <Grid celled>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Link to={`/chopchop/rooms/1`}>
                                        <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                                    </Link>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <Link to={`/chopchop/rooms/1`}>
                                        <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                    </Link>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Link to={`/chopchop/rooms/1`}>
                                        <Image src='http://semantic-ui.com/images/wireframe/image.png' />
                                    </Link>
                                </Grid.Column>
                                <Grid.Column width={13}>
                                    <Link to={`/chopchop/rooms/1`}>
                                        <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                    </Link>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
            </div>

        );
    }
}

Rooms.propTypes = propTypes;
Rooms.defaultProps = defaultProps;

export default Rooms;
