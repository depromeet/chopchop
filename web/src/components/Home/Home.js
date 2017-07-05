import React, { Component } from 'react';
import { Header, Image, Grid, Icon, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return(
            <div>
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


export default Home;
