import IRoute from "./Interfaces/route";
import Home from "./Pages/Home";
import PricingPage from "./Pages/PricingPage";
import SignupPage from "./Pages/SignupPage";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    // exact: true,
  },
  {
    path: "/pricing",
    name: "Pricing Page",
    // component: PricingPage,
    component: PricingPage,
    // exact: true,
  },
  {
    path: "/contact",
    name: "Sigup Page",
    component: SignupPage,
  },
];
export default routes;
