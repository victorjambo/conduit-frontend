import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { tedAction } from '../redux/actions/TedAction';
import Time from './Time';
import { fetchTime } from '../redux/actions/TimeAction';
import '../assets/Ted.scss';
import logo from '../assets/logo.svg';

class Ted extends Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.tedAction('hello');
  }

  render() {
    const { message } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{message}</p>
          <a href="#section" onClick={this.onClick}>Learn React</a>
          <Time />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.TedReducer.message
});

const mapDispatchToProps = dispatch => ({
  tedAction: bindActionCreators(tedAction, dispatch),
  fetchTime: bindActionCreators(fetchTime, dispatch),
});

Ted.propTypes = {
  tedAction: PropTypes.func,
  message: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Ted);
