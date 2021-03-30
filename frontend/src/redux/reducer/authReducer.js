const initialState = {
  authError: null,
  signupSuccess: false,
  loginSuccess: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  console.log(action.type); //LOGIN_SUCCESS
  console.log(action.payload);

  switch (action.type) {
    case "REGISTER_SUCCESS":
      console.log("Registration success...!!");
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        signupSuccess: true,
        authError: null,
      };
    case "REGISTER_FAIL":
      return {
        ...state,
        authError: action.payload,
        signupSuccess: false,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        authError: "Invalid credentials",
        loginSuccess: false,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        authError: null,
        loginSuccess: true,
        signupSuccess: false,
      };
    case "LOGOUT_SUCCESS":
      localStorage.removeItem("user");
      return {
        ...state,
        user: action.payload,
        authError: null,
        signupSuccess: false,
        loginSuccess: false,
      };

    default:
      return state;
  }
};

export default authReducer;
