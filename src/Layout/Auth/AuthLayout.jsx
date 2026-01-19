import React from "react";
import Logo from "../../Components/Logo/Logo";
import { Outlet } from "react-router";
import sideImg from "../../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="">
      <div className="min-h-screen flex flex-col">
        {/* Logo at the top left */}
        <div className="absolute top-8 left-8 z-10">
          <Logo />
        </div>

        {/* Main content area with two columns */}
        <div className="flex flex-row flex-1">
          {/* Left side - Form area */}
          <div className="w-1/2 flex items-center justify-center px-10">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>

          {/* Right side - Image area */}
          <div className="w-1/2 bg-[#fafdf0] flex items-center justify-center">
            <img
              src={sideImg}
              alt="Authentication illustration"
              className="max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
