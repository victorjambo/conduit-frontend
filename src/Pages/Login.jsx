import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { loginActionRequest } from '../redux/actions/authAction';
import Form from '../Components/Form';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.logChange = this.logChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      user: { email, password }
    };
    this.props.loginActionRequest(user);
  }

  logChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Login</h1>
              <p className="text-xs-center">
                <Link to="/register">Don't have an account?</Link>
              </p>

              <ul className="error-messages">
                <li>Email and Password don't match</li>
              </ul>

              <Form
                email={email}
                password={password}
                handleSubmit={this.handleSubmit}
                logChange={this.logChange}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  data: state.authReducer.data
});

const mapDispatchToProps = dispatch => ({
  loginActionRequest: bindActionCreators(loginActionRequest, dispatch),
});

Login.propTypes = {
  loginActionRequest: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
