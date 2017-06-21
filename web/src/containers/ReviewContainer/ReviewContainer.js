import React, { Component, PropTypes } from 'react';
import Review from '../../components/Review/Review';
import ChopWrapper from '../../components/ChopWrapper';

type propTypes = {}

class ReviewContainer extends Component {
  props: propTypes;

  render() {
    return (
      <ChopWrapper>
        <Review />
      </ChopWrapper>
    );
  }
}
export default ReviewContainer;
