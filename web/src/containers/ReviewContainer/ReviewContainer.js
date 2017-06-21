import React, { Component, PropTypes } from 'react';
import Review from '../../components/Review/Review';

const propTypes = {

};
const defaultProps = {

};
class ReviewContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <Review/>
            </div>
        );
    }
}

ReviewContainer.propTypes = propTypes;
ReviewContainer.defaultProps = defaultProps;

export default ReviewContainer;
