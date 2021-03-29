import { GETDATA_SUCCESS, GETDATA_FAILED } from "../actionTypes";
const initialState = {
  services: [],
  low: [],
  medium: [],
  high: [],
  serviceFail: false,
  childRender: false,
};

export const serviceReducer = (state = initialState, action) => {
  console.log("reducer..$$$", action.payload);

  console.log("in service reducer...!!");
  switch (action.type) {
    case GETDATA_SUCCESS:
      console.log("GETDATA success...!!");
      return {
        ...state,
        services: action.payload.map(ele => ele.serviceName),
        low: action.payload.map(ele => ele.lowRisk),
        medium: action.payload.map(ele => ele.mediumRisk),
        high: action.payload.map(ele => ele.highRisk),
        childRender: true,
      };
    case GETDATA_FAILED:
      console.log("GETDATA FAIL...!!");
      return {
        ...state,
        serviceFail: true,
      };
    default:
      return state;
  }
};
