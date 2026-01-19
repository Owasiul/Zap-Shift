import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className="relative font-bold flex flex-row items-center">
        <img className="" src={logo} alt="" />
        <span className="text-3xl absolute left-6 top-4">ZapShift</span>
      </NavLink>
    </div>
  );
};

export default Logo;
