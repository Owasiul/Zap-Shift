import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const { sendResetPasswordMail } = useAuth();

  const handleResetPassword = (data) => {
    sendResetPasswordMail(data.email).then(
      alert(
        "Password Reset Mail is sent successfully! check inn your mailbox or spam",
      ).then((error) => console.error(error.message)),
    );
  };
  return (
    <div>
      <div className="max-w-md mx-auto mt-12 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        <form
          className="space-y-6"
          onSubmit={handleSubmit(handleResetPassword)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-lime-800 hover:bg-lime-700 text-white font-semibold rounded-l focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
