import React, { Component, PropTypes } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';

import * as actions from  '../actions';

const propTypes = {

};
const defaultProps = {

};
class Counter extends Component {

    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);

    }
    setRandomColor() {
		const color = [
			Math.floor((Math.random()*55) + 200),
			Math.floor((Math.random()*55) + 200),
			Math.floor((Math.random()*55) + 200)
		];
		this.props.handleSetColor(color);
	}


    render() {
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };

        return(
            <div style={style}>
                <Value number={this.props.number}/>
				<Control
					onPlus={this.props.handleIncrement}
					onSubtract={this.props.handleDecrement}
					onRandomizeColor={this.setRandomColor}
				/>
      <button onClick={this.props.test1}>asdf</button>
      <button onClick={this.props.test2}>asdf2</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		number: state.counter.number,
		color: state.ui.color
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrement: () => { dispatch(actions.increment())},
		handleDecrement: () => { dispatch(actions.decrement())},
		handleSetColor: (color) => { dispatch(actions.setColor(color))},
    test1: () => { dispatch(actions.test1())},
    test2: () => {dispatch(actions.test2())},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
