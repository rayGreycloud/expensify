import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import PublicRoute from '../routers/PublicRoute';

export const LoginPage = ({ startLogin }) => (
  <div>
    <PublicRoute />
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
