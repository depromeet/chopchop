import React, { Component, PropTypes } from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import GoogleMap from '../GoogleMap/GoogleMap';
const propTypes = {

};
const defaultProps = {

};
class PinList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                <GoogleMap/>
                <Header as='h3' dividing>
                    핀 리스트
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

PinList.propTypes = propTypes;
PinList.defaultProps = defaultProps;

export default PinList;
