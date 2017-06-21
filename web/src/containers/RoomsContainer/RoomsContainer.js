import React, { Component, PropTypes } from 'react';
import Rooms from '../../components/Rooms/Rooms';

const propTypes = {

};
const defaultProps = {

};
class RoomsContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <Rooms/>
            </div>
        );
    }
}

RoomsContainer.propTypes = propTypes;
RoomsContainer.defaultProps = defaultProps;

export default RoomsContainer;
