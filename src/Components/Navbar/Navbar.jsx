import React from "react";
import { NavLink } from "react-router";
import { CircleUserRound } from "lucide-react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, LogOut } = useAuth();
  const handleLogOut = () => {
    LogOut().then((error) => console.log(error));
  };
  // console.log(user);

  const navItems = (
    <div className="flex lg:flex-row flex-col gap-3">
      <li className="text-lg font-medium hover:text-green-400">
        <NavLink to="/aboutus">About Us</NavLink>
      </li>
      <li className="text-lg font-medium hover:text-green-400">
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li className="text-lg font-medium hover:text-green-400">
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li className="text-lg font-medium hover:text-green-400">
        <NavLink to="/track-order">Track Order</NavLink>
      </li>
      <li className="text-lg font-medium hover:text-green-400">
        <NavLink to="/send-parcel">Send Parcel</NavLink>
      </li>
      <li className="text-lg font-medium hover:text-green-400">
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>

      {user && (
        <li className="text-lg font-medium hover:text-green-400">
          <NavLink to="/dashboard/my-parcel">My Parcels</NavLink>
        </li>
      )}
    </div>
  );

  return (
    <div>
      <nav className="navbar bg-base-100 shadow-sm px-5 md:space-x-0 space-x-14">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          {/* logo */}
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex md:flex-row flex-col  md:gap-5 md:space-y-0 space-y-3">
          {user ? (
            <details className="dropdown dropdown-end">
              <summary className="m-1 btn border-0 avatar bg-lime-500">
                <div className="flex items-center justify-between space-x-2">
                  <div className="rounded-full w-10 h-10 p-1 flex items-center justify-center">
                    {user?.photoURL ? (
                      <img
                        className="rounded-full w-full h-full object-cover"
                        src={user.photoURL}
                        alt={user?.displayName || "User"}
                      />
                    ) : (
                      <CircleUserRound size={32} className="text-white" />
                    )}
                  </div>
                  <h1 className="md:text-lg text-sm font-semibold text-white">
                    {user?.displayName || "User"}
                  </h1>
                </div>
              </summary>
              <ul className="menu dropdown-content mt-3 z-1 p-2 shadow-md bg-gray-200 rounded-box w-52 space-y-1.5">
                {/* log out */}
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm bg-linear-to-r from-rose-700 to-red-500 text-white"
                  >
                    Sign Out
                  </button>
                </li>
                {/* be a rider */}
                <li>
                  <button className="btn btn-sm bg-linear-to-r from-lime-400 to-lime-700 text-white">
                    Be a rider
                  </button>
                </li>
              </ul>
            </details>
          ) : (
            <div className="flex lg:flex-row flex-col gap-2">
              <NavLink
                to="/auth/login"
                className="btn border text-neutral-700 bg-white font-bold"
              >
                Sign In
              </NavLink>
            </div>
          )}
          <div className="">
            <NavLink
              to="/rider"
              className="btn btn-wide bg-lime-400 text-neutral-700 font-bold"
            >
              Be a rider
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
