import React, { Component }  from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
        closing: false
        };
    }
    handleChange(e,value,item){
        value[item] = e.target.value
    }
    render() {
        const { visible } = this.props;
        if(!visible) return null;

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
                <h3 type='submit' onClick={e => this.props.onSignUpWithEmail(userSignUpInfo)}>
                    SignUp
                </h3>
            </Form>                
        )
    }
}

export default SignUp