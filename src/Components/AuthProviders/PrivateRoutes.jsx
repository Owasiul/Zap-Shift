import React from "react";
import useAuth from "../../Hooks/useAuth";
import Loading from "../Loading/Loading";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={`/auth/login`} />;
};

export default PrivateRoutes;
