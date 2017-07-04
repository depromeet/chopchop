import React, { Component }  from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react'

class SignUp extends Component {
    handleChange(e,value,item){
        value[item] = e.target.value
    }
    verifyEmailAddress(emailAddress){
        this.props.onVerifyEmail(emailAddress);
    }
    submitUserSignUpInfo(userSignUpInfo){
        console.log(userSignUpInfo);
        if(this.props.verifiedEmail){
            this.props.onSignUpWithEmail(userSignUpInfo);
        }else{
            this.props.onAuthShowMessage(`Email address isn't verified`)
        }
    }
    render() {
        const { visible } = this.props;
        if(!visible) return null;
        const verifiedEmail = this.props.verifiedEmail;
        let userSignUpInfo = {
                "user_tokenid" : "NULL",
                "user_name" : "",
                "user_nickname" : "",
                "user_email" : "",
                "user_password" : "",
                "user_source" : "direct",
            }
        return (  
            <Form>
                <Form.Field>
                <label>Email</label>
                <input 
                    placeholder='YourEmail@Email.com' 
                    type='email'
                    onChange={(e) => {
                        this.handleChange(e,userSignUpInfo,"user_email")
                        }}
                />
                <div>{verifiedEmail?"VERIFIED":"NOT VERIFIED"}</div>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        this.verifyEmailAddress(userSignUpInfo["user_email"])
                        }}
                >
                    VERIFY EMAIL
                </Button>
                
                
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
                <h3 type='submit' onClick={e => this.submitUserSignUpInfo(userSignUpInfo)}>
                    SignUp
                </h3>
            </Form>                
        )
    }
}

export default SignUp