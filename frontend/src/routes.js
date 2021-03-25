import Dashboard from "views/Dashboard.js";
import ServiceBarChart from "views/ServiceBarChart";
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
    component: ServiceBarChart,
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
