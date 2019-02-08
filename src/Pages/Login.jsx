import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
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

          <form>
            <fieldset className="form-group">
              <input className="form-control form-control-lg" type="text" placeholder="Email" />
            </fieldset>
            <fieldset className="form-group">
              <input className="form-control form-control-lg" type="password" placeholder="Password" />
            </fieldset>
            <button className="btn btn-lg btn-primary pull-xs-right">
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
);

export default Login;
