import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sampleAction } from '../actions/sampleAction';

class Sample extends Component {

	componentDidMount() {
    this.props.sampleAction();
  }

	render() {
		return (
			<div>
				<div> Welcome Again!! </div>
				<div>{this.props.data}</div>
			</div>
	);
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.Sample.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sampleAction: bindActionCreators(sampleAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
