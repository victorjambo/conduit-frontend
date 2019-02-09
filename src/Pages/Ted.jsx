import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/Ted.scss';
import { connect } from 'react-redux';
import { tedAction } from '../redux/actions/TedAction';
import { bindActionCreators } from 'redux';
import Time from './Time';
import { fetchTime } from '../redux/actions/TimeAction';

class Ted extends Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.tedAction("hello");
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

export default connect(mapStateToProps, mapDispatchToProps)(Ted);
