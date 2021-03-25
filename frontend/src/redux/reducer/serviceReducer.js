const initialState = {
  services: [],
  low: [],
  medium: [],
  high: [],
  childRender: false,
};

export const serviceReducer = (state = initialState, action) => {
  console.log("reducer..$$$", action.payload);

  //console.log(result.map(ele => ele.serviceName));
  console.log("in service reducer...!!");
  switch (action.type) {
    case "GETDATA_SUCCESS":
      console.log("GETDATA success...!!");
      return {
        ...state,
        services: action.payload.map(ele => ele.serviceName),
        low: action.payload.map(ele => ele.lowRisk),
        medium: action.payload.map(ele => ele.mediumRisk),
        high: action.payload.map(ele => ele.highRisk),
        childRender: true,
      };
    default:
      return state;
  }
};
