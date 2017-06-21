import React, { Component, PropTypes } from 'react';
import MyPage from '../../components/MyPage/MyPage';

const propTypes = {

};
const defaultProps = {

};
class MyPageContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <MyPage/>
        );
    }
}

MyPageContainer.propTypes = propTypes;
MyPageContainer.defaultProps = defaultProps;

export default MyPageContainer;
