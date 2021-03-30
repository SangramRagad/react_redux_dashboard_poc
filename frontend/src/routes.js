import Dashboard from "./views/Dashboard";
import ServiceBarGraph from "./views/ServiceBarGraph";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
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
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    layout: "/admin",
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    layout: "/admin",
  },
];

export default dashboardRoutes;
