import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import Coverage from "../Page/Coverage/Coverage";
import About_Us from "../Page/About_Us/About_Us";
import AuthLayout from "../Layout/Auth/AuthLayout";
import Login from "../Components/AuthComponents/Login";
import Register from "../Components/AuthComponents/Register";
import ResetPassword from "../Components/AuthComponents/ResetPassword";
import PrivateRoutes from "../Components/AuthProviders/PrivateRoutes";
import Rider from "../Page/Rider/Rider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/aboutus",
        Component: About_Us,
        loader: () => fetch("/tabsData.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/resetpassword",
        Component: ResetPassword,
      },
    ],
  },
  {
    path: "/rider",
    element: (
      <PrivateRoutes>
        <Rider></Rider>
      </PrivateRoutes>
    ),
  },
]);
export default router;
