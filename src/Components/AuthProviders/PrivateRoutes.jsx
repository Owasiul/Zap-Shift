import React from "react";
import useAuth from "../../Hooks/useAuth";
import Loading from "../Loading/Loading";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useAuth();
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
  return <Navigate to={`/auth/login`} />;
};

export default PrivateRoutes;
