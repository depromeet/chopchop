import React, { Component, PropTypes } from 'react';
import PinList from '../../components/PinList/PinList';

const propTypes = {

};
const defaultProps = {

};
class PinListContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
            <PinList/>
          </div>
        );
    }
}

PinListContainer.propTypes = propTypes;
PinListContainer.defaultProps = defaultProps;

export default PinListContainer;
