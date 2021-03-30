import React from "react";
import { Alert } from "react-bootstrap";
const Welcome = () => {
  let userName;
  if (localStorage.getItem("user")) {
    const localData = JSON.parse(localStorage.getItem("user"));
    userName = localData.user.firstName;
  }

  return (
    <div className="container justify-content-md-center">
      {userName ? (
        <Alert variant="success">
          <Alert.Heading>Welcome {userName}</Alert.Heading>
          <p>Aww yeah...!! , you have successfully logged in...</p>
        </Alert>
      ) : null}
    </div>
  );
};

export default Welcome;
