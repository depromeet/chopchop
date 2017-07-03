import React, { Component }  from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

class SignIn extends Component {
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
            <Modal trigger={<Button fluid color='grey'>Login</Button>}>
                <Modal.Header>SignIn</Modal.Header>
                <Modal.Content>
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
                </Modal.Content>
            </Modal>
        );
    }
}
export default SignIn