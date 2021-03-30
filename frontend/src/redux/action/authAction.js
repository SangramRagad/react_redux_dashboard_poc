import axios from "axios";

export const register = ({
  firstName,
  lastName,
  email,
  password,
}) => dispatch => {
  //Header
  console.log(firstName);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //Request body
  const body = JSON.stringify({ firstName, lastName, email, password });
  console.log("hhhhhhhhh auth");
  axios
    .post("http://localhost:5000/signup", body, config)
    .then(res =>
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      })
    )
    .catch(err => dispatch({ type: "REGISTER_FAIL", payload: err.err }));
};

export const login = ({ email, password }) => dispatch => {
  //Header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("http://localhost:5000/signin", body, config)
    .then(res =>
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      })
    )
    .catch(err => dispatch({ type: "LOGIN_FAIL", payload: err.error }));
};

export const logout = () => dispatch => {
  dispatch({
    type: "LOGOUT_SUCCESS",
  });
};
