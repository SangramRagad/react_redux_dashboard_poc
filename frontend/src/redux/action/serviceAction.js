import * as actionTypes from "../actionTypes";
import axios from "axios";

const url = "http://localhost:5000/getdata";

export const getDataAction = () => dispatch => {
  console.log("get Actions##############");
  axios
    .get(url)
    .then(res =>
      dispatch({
        type: actionTypes.GETDATA_SUCCESS,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({ type: actionTypes.GETDATA_FAILED, payload: err.error })
    );
};
