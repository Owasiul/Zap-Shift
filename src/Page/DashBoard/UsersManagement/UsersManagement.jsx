import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Shield, ShieldOff } from "lucide-react";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} has been marked as an admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };
    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.displayName} has been marked as an admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-linear-to-r from-blue-500 to-blue-600">
              <h1 className="text-2xl font-bold text-white">User Management</h1>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      No.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Admin Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Other Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user, index) => (
                    <tr
                      key={user._id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {user.displayName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                            user.role === "admin"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-3">
                          {user.role === "admin" ? (
                            <button
                              onClick={() => handleRemoveAdmin(user)}
                              className="px-3 py-1 rounded-full text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center gap-1"
                              title="Remove Admin Privileges"
                            >
                              <ShieldOff size={16} />
                              <span>Remove Admin</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleMakeAdmin(user)}
                              className="px-3 py-1 rounded-full text-xs font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center gap-1"
                              title="Make Admin"
                            >
                              <Shield size={16} />
                              <span>Make Admin</span>
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-2">
                          <button
                            // onClick={() => handleEdit(user._id)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            // onClick={() => handleDelete(user._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {users.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No users found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
