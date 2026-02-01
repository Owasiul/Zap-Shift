import React from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import Loading from "../Loading/Loading";
import Forbidden from "../Forbidden/Forbidden";

const RiderRoutes = ({ children }) => {
  const { loading } = useAuth();
  const { role, isLoading } = useRole();
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }
  return children;
};

export default RiderRoutes;
