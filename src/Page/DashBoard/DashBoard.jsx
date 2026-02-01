import {
  Bike,
  BoxIcon,
  History,
  ListTodo,
  Motorbike,
  User,
  UserCheck2Icon,
  Van,
} from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";
import useRole from "../../Hooks/useRole";

const DashBoard = () => {
  const { role } = useRole();
  // console.log(role);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 shadow-md sticky top-0 z-40">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="size-5"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4 text-lg font-semibold">Zap Shift Dashboard</div>
        </nav>
        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-64 bg-base-200 min-h-screen flex flex-col">
          {/* Sidebar content */}
          <ul className="menu w-full grow p-4 gap-2">
            {/* user only dashboard */}
            <li>
              <Link to="/" className="flex items-center gap-3 lg:mt-0 mt-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span>Homepage</span>
              </Link>
            </li>
            {role === "user" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/my-parcel"
                    className="flex items-center gap-3"
                  >
                    <Van size={20} />
                    <span>My Parcels</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment-history"
                    className="flex items-center gap-3"
                  >
                    <History size={20} />
                    <span>My Payment History</span>
                  </NavLink>
                </li>
              </>
            )}

            {role === "rider" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/assigned-delivery"
                    className="flex items-center gap-3"
                  >
                    <ListTodo size={20} />
                    <span>Assigned Deliveries</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* admin only dashboard */}
            {role === "admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/approve-riders"
                    className="flex items-center gap-3"
                  >
                    <Motorbike size={20}></Motorbike>
                    <span>Apporve Riders</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/assign-riders"
                    className="flex items-center gap-3"
                  >
                    <Bike size={20}></Bike>
                    <span>Assign Riders</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/users-management"
                    className="flex items-center gap-3"
                  >
                    <User size={20} />
                    <span>Users Management</span>
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <button className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
