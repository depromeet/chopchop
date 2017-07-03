import React, { Component } from 'react';
import { Segment, Button, Divider, Checkbox, Form } from 'semantic-ui-react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Auth.css";

class Auth extends Component {
    render() {
        return(
            <div className="Auth-wrapper">
                <Button fluid color='blue'>Facebook Login</Button>
                <Divider horizontal>Or</Divider>
                <SignIn
                    onSignInWithEmail={this.props.onSignInWithEmail}
                />
                <Divider horizontal>Or</Divider>
                <SignUp
                    onSignUpWithEmail={this.props.onSignUpWithEmail}
                />
            </div>
        );
    }
}

export default Auth;
