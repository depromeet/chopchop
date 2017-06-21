import React, { Component, PropTypes } from 'react';
import Home from '../../components/Home/Home';

const propTypes = {

};
const defaultProps = {

};
class HomeContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <Home/>
            </div>
        );
    }
}

HomeContainer.propTypes = propTypes;
HomeContainer.defaultProps = defaultProps;

export default HomeContainer;
