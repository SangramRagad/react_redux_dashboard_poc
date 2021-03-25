import React, { Component } from "react";
import Chart from "react-apexcharts";
import { getServiceData2 } from "redux/action/serviceAction";
import { connect } from "react-redux";

class ServiceBarChart extends Component {
  constructor(props) {
    console.log("constructor loaded@@@@@@");
    super(props);
    console.log("barchart - props", this.props.services);
    this.state = {
      options: {
        chart: {
          id: "ML - chart",
        },
        fill: {
          colors: ["#479700", "#0000FF", "#F41605"],
        },
        xaxis: {
          categories: this.props.services,
        },
      },
      series: [
        {
          name: "low-riskFactor",
          data: this.props.low,
          color: "#479700",
        },
        {
          name: "medium-riskFactor",
          data: this.props.medium,
          color: "#0000FF",
        },
        {
          name: "high-riskFactor",
          data: this.props.high,
          color: "#F41605",
        },
      ],
    };
  }
  // componentDidMount() {
  //   console.log("component Did Mount");
  //   this.props.getServiceData2();
  // }

  render() {
    console.log("barchart render");
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={950}
          height={550}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("MapStateToprops:", state.service.services);
  return {
    services: state.service.services,
    low: state.service.low,
    medium: state.service.medium,
    high: state.service.high,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getServiceData2: () => dispatch(getServiceData2()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceBarChart);
