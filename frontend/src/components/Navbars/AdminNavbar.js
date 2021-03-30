import React from "react";
import "../Navbar.css";
import SignUp from "../SignUp";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "../Welcome";
import SignIn from "../SignIn";
import Logout from "../Logout";
// import { connect } from "react-redux";

function Header(props) {
  return (
    <div className="body-template">
      <Router>
        <div className="Navbar">
          <Navbar variant="dark" expand="lg" sticky="top">
            <div>
              {props.loginSuccess ? (
                <Link to="/logout" style={{ textDecoration: "none" }}>
                  {" "}
                  <span>Logout</span>
                </Link>
              ) : (
                <div>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <span>SignIn</span>
                  </Link>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    {" "}
                    <span>SignUp</span>
                  </Link>
                </div>
              )}
            </div>
          </Navbar>
        </div>
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     authError: state.auth.authError,
//     loginSuccess: state.auth.loginSuccess,
//   };
// };

// export default connect(mapStateToProps, null)(Header);
export default Header;
