import Dashboard from "./views/Dashboard";
import ServiceBarGraph from "./views/ServiceBarGraph";
import Help from "views/Help.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "ServiceBarGraph",
    component: ServiceBarGraph,
    layout: "/admin",
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
    layout: "/admin",
  },
];

export default dashboardRoutes;
