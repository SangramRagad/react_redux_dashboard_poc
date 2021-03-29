import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { getDataAction } from "../redux/action/serviceAction";
import { connect } from "react-redux";

const ServiceBarHook = props => {
  useEffect(() => {
    console.log("useEffect****");
    props.getDataAction();
  }, []);

  console.log("barchart - props", props.services);

  const options = {
      chart: {
        id: "ML - chart",
      },
      fill: {
        colors: ["#479700", "#0000FF", "#F41605"],
      },
      xaxis: {
        categories: props.services,
      },
    },
    series = [
      {
        name: "low-riskFactor",
        data: props.low,
        color: "#479700",
      },
      {
        name: "medium-riskFactor",
        data: props.medium,
        color: "#0000FF",
      },
      {
        name: "high-riskFactor",
        data: props.high,
        color: "#F41605",
      },
    ];

  return (
    <div>
      {!props.serviceFail ? (
        <Chart
          options={options}
          series={series}
          type="bar"
          width={950}
          height={550}
        />
      ) : (
        <h2 style={{ color: "red" }}>Service Graph is not availble..!!</h2>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("MapStateToprops:", state.service.services);
  return {
    services: state.service.services,
    low: state.service.low,
    medium: state.service.medium,
    high: state.service.high,
    serviceFail: state.service.serviceFail,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDataAction: () => dispatch(getDataAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceBarHook);
