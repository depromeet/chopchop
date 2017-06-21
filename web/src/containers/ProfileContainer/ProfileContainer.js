import React, { Component, PropTypes } from 'react';
import Profile from '../../components/Profile/Profile';

const propTypes = {

};
const defaultProps = {

};
class ProfileContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <Profile/>
            </div>
        );
    }
}

ProfileContainer.propTypes = propTypes;
ProfileContainer.defaultProps = defaultProps;

export default ProfileContainer;
