// @flow
import React, { Component } from 'react';
import ChopWrapper from '../../components/ChopWrapper';
import Home from '../../components/Home/Home';
import { connect } from 'react-redux';
import * as homeActions from '../../actions/home';


type propTypes = {}

class HomeContainer extends Component {
  props: propTypes;
  constructor(props) {
    super(props);
    this.props.onGetPopularReviews();

  }
  

  render() {
    return (
      <ChopWrapper tab="Home">
        <Home
          homeReducer={this.props.homeReducer}

        />
      </ChopWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeReducer: state.homeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  onGetPopularReviews: () => dispatch(homeActions.getPopularReviews()),
};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
