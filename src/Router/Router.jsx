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
import SendParcel from "../Page/SendParcel/SendParcel";
import DashBoard from "../Page/DashBoard/DashBoard";
import UserParcel from "../Page/DashBoard/UserParcel/UserParcel";
import Payment from "../Page/DashBoard/Payment/Payment";
import PaymentSuccess from "../Page/DashBoard/Payment/PaymentSuccess/PaymentSuccess";
import PaymentCanceled from "../Page/DashBoard/Payment/PaymentCanceled/PaymentCanceled";
import PaymentHistory from "../Page/DashBoard/Payment/PaymentHistory/PaymentHistory";
import ApproveRiders from "../Page/DashBoard/ApproveRiders/ApproveRiders";
import UsersManagement from "../Page/DashBoard/UsersManagement/UsersManagement";
import AdminRoutes from "../Components/AuthProviders/AdminRoutes";
import AssignRiders from "../Page/DashBoard/AssignRiders/AssignRiders";

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
    loader: () => fetch("/warehouses.json").then((res) => res.json()),
  },
  {
    path: "/send-parcel",
    loader: () => fetch("/warehouses.json").then((res) => res.json()),
    element: (
      <PrivateRoutes>
        <SendParcel></SendParcel>
      </PrivateRoutes>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/my-parcel",
        Component: UserParcel,
      },
      {
        path: "/dashboard/payment-history",
        Component: PaymentHistory,
      },
      {
        path: "/dashboard/payment/:parcelId",
        Component: Payment,
      },
      {
        path: "/dashboard/payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "/dashboard/payment-cancelled",
        Component: PaymentCanceled,
      },
      {
        path: "/dashboard/approve-riders",
        element: (
          <AdminRoutes>
            <ApproveRiders />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/users-management",
        element: (
          <AdminRoutes>
            <UsersManagement />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/assign-riders",
        element: (
          <AdminRoutes>
            <AssignRiders></AssignRiders>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
export default router;
