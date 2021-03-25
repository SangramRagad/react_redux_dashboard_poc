import React, { useEffect } from "react";
import Graph from "assets/img/graph.jpg";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        {
          <div className="all-graph">
            {/* <div class="w-50 p-3 h-50"> */}
            <img
              src={require("assets/img/graph.jpg").default}
              alt="..."
              class="img-thumbnail"
            />
            {/* </div>     */}
          </div>
        }
      </Container>
    </>
  );
}
export default Dashboard;
