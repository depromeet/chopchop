import React, { Component } from 'react';
import { Segment, Button, Divider, Checkbox, Form } from 'semantic-ui-react'

import "./Auth.css";

class Auth extends Component {
    render() {
        return(
            <div className="Auth-wrapper">
                <Button fluid color='blue'>Facebook Login</Button>
                <Divider horizontal>Or</Divider>
                <Button fluid color='grey'>Login</Button>
                <SignInForm
                    onSignInWithEmail={this.props.onSignInWithEmail}
                />
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>Sign Up Now</Button>
                <SignUpForm
                    onSignUpWithEmail={this.props.onSignUpWithEmail}
                />
            </div>
        );
    }
}

export default Auth;

class SignInForm extends Component {
    handleChange(e,value,item){
        value[item] = e.target.value
    }
    render() {
        let userSignUpInfo = {
                "user_email" : "",
                "user_password" : "",
                "user_tokenid" : "null",
                "user_source" : "direct"
            }
        return (
            <Form>
                <Form.Field>
                <label>Email</label>
                <input 
                    placeholder='YourEmail@Email.com' 
                    type='email'
                    onChange={e => this.handleChange(e,userSignUpInfo,"user_email")}
                    />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input 
                    placeholder='Your Password' 
                    type='password'
                    onChange={e => this.handleChange(e,userSignUpInfo,"user_password")}
                    />
                </Form.Field>
                <div type='submit' onClick={e => this.props.onSignInWithEmail(userSignUpInfo)}>
                    SignIn
                </div>
            </Form>                
        )
    }
}

class SignUpForm extends Component {
    handleChange(e,value,item){
        value[item] = e.target.value
    }
    render() {
        let userSignUpInfo = {
                "user_tokenid" : "",
                "user_name" : "",
                "user_nickname" : "",
                "user_email" : "",
                "user_password" : "",
                "user_source" : "direct"
            }
        return (
            <Form>
                <Form.Field>
                <label>Email</label>
                <input 
                    placeholder='YourEmail@Email.com' 
                    type='email'
                    onChange={e => this.handleChange(e,userSignUpInfo,"user_email")}
                />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input 
                    placeholder='Your Password' 
                    type='password'
                    onChange={e => this.handleChange(e,userSignUpInfo,"user_password")}
                />
                </Form.Field>
                <Form.Field>
                <label>Name</label>
                <input 
                    placeholder='Your Name'
                    onChange={e => this.handleChange(e,userSignUpInfo,"user_name")}
                />
                </Form.Field>
                <Form.Field>
                <label>Nickname</label>
                <input 
                    placeholder='Your Nickname' 
                    onChange={e => this.handleChange(e,userSignUpInfo,"user_nickname")}
                />
                </Form.Field>
                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <div type='submit' onClick={e => this.props.onSignUpWithEmail(userSignUpInfo)}>
                    SignUp
                </div>
            </Form>                
        )
    }
}