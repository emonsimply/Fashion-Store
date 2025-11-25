"use client";

import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!name || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      setLoading(false);
      return;
    }

    try {
      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUser(email, password);

      // 2️⃣ Update user profile (displayName)
      await updateUserProfile(name);

      Swal.fire({
        icon: "success",
        title: "Registered!",
        text: "Your account has been created successfully.",
        timer: 1500,
      });

      form.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 rounded-3xl px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
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
              px-4 py-1.5
              hover:bg-teal-600 hover:text-white
              transition duration-300
            "
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-teal-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
