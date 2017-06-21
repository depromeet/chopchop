import React, { Component, PropTypes } from 'react';
import { Segment, Button, Divider } from 'semantic-ui-react'

const propTypes = {

};
const defaultProps = {

};
class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Segment padded>
                <Button primary fluid>Login</Button>
                <Divider horizontal>Or</Divider>
                <Button secondary fluid>Sign Up Now</Button>
            </Segment>
        );
    }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
