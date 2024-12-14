import Home from "@/pages/home";
import Brownies from "@/pages/brownies";

const routes = [
  {
    path: "/",
    name: "Home 🌍",
    element: <Home />,
  },
  {
    path: "/brownies",
    name: "Brownies 🍫",
    element: <Brownies />,
  },
];

export default routes;
