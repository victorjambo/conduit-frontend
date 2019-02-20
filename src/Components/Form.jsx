import React from 'react';
import PropTypes from 'prop-types';


const Fields = ({ value, logChange, type }) => (
  <fieldset className="form-group">
    <input
      className="form-control form-control-lg"
      type={type}
      placeholder={type}
      value={value}
      name={type}
      onChange={logChange}
    />
  </fieldset>
);

Fields.propTypes = {
  value: PropTypes.string,
  logChange: PropTypes.func,
  type: PropTypes.string
};

const Button = ({ label }) => (
  <button type="button" className="btn btn-lg btn-primary pull-xs-right">
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string
};

const Form = ({
  email, password, handleSubmit, logChange
}) => (
  <form onSubmit={handleSubmit}>
    <Fields value={email} logChange={logChange} type="email" />
    <Fields value={password} logChange={logChange} type="password" />
    <Button label="Login" />
  </form>
);

Form.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  handleSubmit: PropTypes.func,
  logChange: PropTypes.func
};

export default Form;
