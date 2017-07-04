import React, { Component } from 'react';
import { Button, Divider } from 'semantic-ui-react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./Auth.css";

class Auth extends Component {
    render() {
        const signInVisible = this.props.authReducer.signInVisibility;
        const signUpVisible = this.props.authReducer.signUpVisibility;
        const onMakeSignInVisible = this.props.onMakeSignInVisible;
        const onMakeSignInUnvisible = this.props.onMakeSignInUnvisible;
        const onMakeSignUpVisible = this.props.onMakeSignUpVisible;
        const onMakeSignUpUnvisible = this.props.onMakeSignUpUnvisible;
        return(
            <div className="Auth-wrapper">
                <Button fluid color='blue'>Facebook Login</Button>
                <Divider horizontal>Or</Divider>
                <Button fluid color='grey'
                        onClick={function(e){
                            if (signInVisible === false) return onMakeSignInVisible()
                            else return onMakeSignInUnvisible()
                        }}>
                        Login</Button>
                <SignIn
                    onSignInWithEmail={this.props.onSignInWithEmail}
                    visible={signInVisible}
                />
                <Divider horizontal>Or</Divider>
                <Button secondary fluid
                        onClick={function(e){
                            if (signUpVisible === false) return onMakeSignUpVisible()
                            else return onMakeSignUpUnvisible()
                        }}>
                    Sign Up Now</Button>
                <SignUp
                    onSignUpWithEmail={this.props.onSignUpWithEmail}
                    visible={signUpVisible}
                />
            </div>
        );
    }
}
export default Auth;
