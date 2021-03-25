import axios from "axios";

const url = "http://localhost:5000/getdata";

export const getServiceData2 = () => dispatch => {
  console.log("get Actions##############");
  axios
    .get(url)
    .then(res =>
      dispatch({
        type: "GETDATA_SUCCESS",
        payload: res.data,
      })
    )
    .catch(err => dispatch({ type: "GETDATA_FAIL", payload: err.error }));
};
