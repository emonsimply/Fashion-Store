"use client";

import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  // FIXED: useContext instead of use()
  const { singInUser, singInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      setLoading(false);
      return;
    }

    // Login with Firebase Email/Password
    singInUser(email, password)
      .then(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          timer: 1500,
        });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    setLoading(true);

    singInWithGoogle()
      .then(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Logged in with Google",
          timer: 1500,
        });
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-teal-50 rounded-3xl">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full border-2 rounded-full font-semibold
              border-teal-600 text-teal-600
              px-4 py-2 
              hover:bg-teal-600 hover:text-white 
              transition duration-300
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-gray-500">OR</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="
            w-full border-2 rounded-full font-semibold
            border-teal-600 text-teal-600
            px-4 py-2 
            hover:bg-teal-600 hover:text-white 
            transition duration-300 
            flex items-center justify-center gap-2
          "
        >
          <FcGoogle />
          {loading ? "Logging in..." : "Login With Google"}
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-teal-600 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
