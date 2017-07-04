import React, { Component }  from 'react'
import { Form } from 'semantic-ui-react'

class SignIn extends Component {
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
                <h3 type='submit' onClick={e => this.props.onSignInWithEmail(userSignUpInfo)}>
                    Submit
                </h3>
            </Form>         
        );
    }
}
export default SignIn