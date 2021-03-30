import React, { useState, useDispatch, Component } from "react";
// import Form from "react-bootstrap/Form";
import { Form, Button, Alert } from "react-bootstrap";
import "./Login.css";
import { Redirect } from "react-router-dom";
import { login } from "../redux/action/authAction";
import { connect } from "react-redux";
import axios from "axios";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  //let history = useHistory();
  //const dispatch = useDispatch();
  //const user = { email, password };

  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // this.props.signIn(this.state);
    const { email, password } = this.state;

    const user = {
      email,
      password,
    };
    // const userTwo = JSON.parse(user);

    // console.log(userTwo);
    //Attempt to login
    this.props.login(user);
  };

  render() {
    return (
      <div>
        <div className="login">
          <Form onSubmit={this.handleSubmit}>
            <h4 className="heading">Login Page</h4>
            {this.props.authError ? (
              <Alert variant="danger">{this.props.authError}</Alert>
            ) : null}
            {this.props.loginSuccess ? <Redirect to="/welcome" /> : ""}
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="btn"
              block
              size="lg"
              type="submit"
              // disabled={!this.validateForm()}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    loginSuccess: state.auth.loginSuccess,
    user: state.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: creds => dispatch(login(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
