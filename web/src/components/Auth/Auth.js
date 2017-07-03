import React, { Component } from 'react';
import { Segment, Button, Divider } from 'semantic-ui-react'

class Login extends Component {
    render() {
        console.log(this.props.onSignInWithEmail);
        console.log(this.props.onSignUpWithEmail);
        return(
            <Segment padded>
                <Button primary fluid>Login</Button>
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>Sign Up Now</Button>
            </Segment>
        );
    }
}

export default Login;
