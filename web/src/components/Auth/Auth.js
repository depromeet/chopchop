import React, { Component } from 'react';
import { Segment, Button, Divider, Checkbox, Form } from 'semantic-ui-react'

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
                <SignInForm/>
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>Sign Up Now</Button>
                <SignUpForm/>
            </div>
        );
    }
}

export default Auth;

class SignInForm extends Component {
    render() {
        let userSignUpInfo = {
            "user" : {
                "user_email" : "",
                "user_password" : "",
                "user_tokenid" : "null",
                "user_source" : "direct"
                }   
            }
        return (
            <Form>
                <Form.Field>
                <label>Email</label>
                <input placeholder='YourEmail@Email.com' type='email'/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='Your Password' type='password'/>
                </Form.Field>
                <Button type='submit'>SignIn</Button>
            </Form>                
        )
    }
}

class SignUpForm extends Component {
    render() {
        let userSignUpInfo = {
            "user" : {
                "user_tokenid" : "",
                "user_name" : "",
                "user_nickname" : "",
                "user_email" : "",
                "user_password" : "",
                "user_source" : "direct"
                }   
            }
        return (
            <Form>
                <Form.Field>
                <label>Email</label>
                <input placeholder='YourEmail@Email.com' type='email'/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='Your Password' type='password'/>
                </Form.Field>
                <Form.Field>
                <label>Name</label>
                <input placeholder='Your Name'/>
                </Form.Field>
                <Form.Field>
                <label>Nickname</label>
                <input placeholder='Your Nickname' />
                </Form.Field>
                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit'>SignUp</Button>
            </Form>                
        )
    }
}