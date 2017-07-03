import React, { Component } from 'react';
import { Segment, Button, Divider } from 'semantic-ui-react'
import "./Auth.css";

class Auth extends Component {
    render() {
        console.log(this.props.onSignInWithEmail);
        console.log(this.props.onSignUpWithEmail);
        return(
            <div className="Auth-wrapper">
                <Button fluid color='blue'>Facebook Login</Button>
                <Divider horizontal>Or</Divider>
                <Button fluid color='grey'>Login</Button>
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>Sign Up Now</Button>
            </div>
        );
    }
}

export default Auth;
