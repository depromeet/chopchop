import React, { Component } from 'react';
import Review from '../../components/Review/Review';
import ChopWrapper from '../../components/ChopWrapper';
import * as reviewActions from '../../actions/review';
import { connect } from 'react-redux';
type propTypes = {}

class ReviewContainer extends Component {
  props: propTypes;
  constructor (props) {
    super(props)
    const reviewId = this.props.match.params.reviewId;
    this.props.onGetReviewDataInTheReview(reviewId);
  }

  render() {
    return (
      <ChopWrapper tab="Review">
        <Review 
          reviewReducer={this.props.reviewReducer}
        />
      </ChopWrapper>
    );
  }
}
function mapStateToProps(state) {
  return {
    reviewReducer: state.reviewReducer,
    userId: state.authReducer.userInfo.user_id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetReviewDataInTheReview: (reviewId) => dispatch(reviewActions.getReviewDataInTheReview(reviewId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
