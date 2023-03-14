//After npm run test please enter a to see all test (13 tests)
import React from 'react';
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ authedUser, children }) => {
  const location = useLocation();

  return authedUser ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
    // <Navigate to={`/login?redirectTo=${location.pathname}`} />
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
