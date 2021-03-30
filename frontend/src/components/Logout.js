import React from "react";
import { Redirect } from "react-router";
// import { logout } from "../redux/actions/authAction";
import { connect } from "react-redux";

const Logout = props => {
  props.logout();
  return (
    <div>
      <Redirect to="/" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    success: state.auth.success,
    user: state.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
