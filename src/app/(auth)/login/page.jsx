"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Example login validation
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      setLoading(false);
      return;
    }

    // Simulate login request
    setTimeout(() => {
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        timer: 1500,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-teal-50 rounded-3xl">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
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

        {/* Footer Link */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-teal-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
