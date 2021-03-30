import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button, Alert } from "react-bootstrap";
import "./Login.css";
import { connect } from "react-redux";
import { register } from "../redux/action/authAction";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
  };

  // function validateForm() {
  //   console.log(userData.email);
  //   //return userData.email.length > 0 && userData.password.length > 0;
  // }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { firstName, lastName, email, password } = this.state;
    const userDetails = {
      firstName,
      lastName,
      email,
      password,
    };

    if (!firstName || !lastName || !email || !password) {
      this.setState({ ...this.state, error: "Please enter all fields..!!" });
    } else {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error: "",
      });
    }

    this.props.register(userDetails);
  };

  render() {
    return (
      <div>
        <div className="login">
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-success"
                style={{ display: this.props.signupSuccess ? "" : "none" }}
              >
                New account was created successfully. Please
                <Link to="/login">Login Here</Link>
              </div>
            </div>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <h4 className="heading">Signup Page</h4>
            {this.state.error ? (
              <Alert variant="danger">{this.state.error}</Alert>
            ) : null}

            <Form.Group size="lg" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Button block size="lg" type="submit" className="btn">
              Register
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signupSuccess: state.auth.signupSuccess,
  authError: state.authError,
});

const mapDispatchToProps = dispatch => {
  return {
    register: userData => dispatch(register(userData)),
  };
};

export default connect(mapStateToProps, { register })(Signup);
//disabled={!validateForm()}
