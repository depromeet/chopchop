import React, { Component, PropTypes } from 'react';
import Room from '../../components/Room/Room';

const propTypes = {

};
const defaultProps = {

};
class RoomContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <Room/>
            </div>
        );
    }
}

RoomContainer.propTypes = propTypes;
RoomContainer.defaultProps = defaultProps;

export default RoomContainer;
