import React from 'react';

const Fields = ({ value, logChange, type }) => (
  <fieldset className="form-group">
    <input
      className="form-control form-control-lg"
      type={type}
      placeholder={type}
      value={value}
      name={type}
      onChange={logChange} />
  </fieldset>
);

const Button = ({ label }) => (
  <button className="btn btn-lg btn-primary pull-xs-right">
    {label}
  </button>
);

const Form = ({ email, password, handleSubmit, logChange }) => (
  <form onSubmit={handleSubmit}>
    <Fields value={email} logChange={logChange} type="email" />
    <Fields value={password} logChange={logChange} type="password" />
    <Button label="Login" />
  </form>
);

export default Form;
