import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="bg-gray-900 min-h-screen pt-28 flex items-center justify-center px-20 py-20">
      <div className="w-full max-w-xl bg-gray-800 rounded-lg shadow-lg p-12">
        <h1 className="text-3xl font-bold text-center text-slate-400 mb-8">
          Create an Account
        </h1>
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* College ID Field */}
          <div>
            <label
              htmlFor="collegeId"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              College ID
            </label>
            <input
              type="number"
              id="collegeId"
              name="collegeId"
              placeholder="24#######"
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="*******"
              className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center"
          >
            Sign Up
          </button>
          <p className="text-sm font-light text-gray-300 text-center">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-blue-500 hover:underline"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;