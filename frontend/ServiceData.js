import React, { Component } from "react";
// import { getServiceData2 } from "redux/action/serviceAction";
import getServiceData from "./frontend/src/services/serviceAPI";
import ServiceBarChart from "./frontend/src/views/ServiceBarChart";

class ServiceData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      low: [],
      medium: [],
      high: [],
      childRender: false,
    };
  }
  componentDidMount() {
    getServiceData().then(result => {
      this.setState({
        users: result.map(ele => ele.serviceName, +" "),
        low: result.map(ele => ele.lowRisk, +" "),
        medium: result.map(ele => ele.mediumRisk, +" "),
        high: result.map(ele => ele.highRisk, +" "),
        childRender: true,
      });
    });
  }

  render() {
    return (
      <>
        {this.state.childRender && (
          <>
            <div className="container">
              <ServiceBarChart service={this.state} />
            </div>
          </>
        )}
      </>
    );
  }
}
export default ServiceData;
