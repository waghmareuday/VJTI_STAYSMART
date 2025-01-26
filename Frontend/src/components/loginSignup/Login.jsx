import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-slate-400 mb-6">
          Login
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg block w-full p-2.5 placeholder-gray-400"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-700 border border-gray-600 text-white rounded-lg block w-full p-2.5 placeholder-gray-400"
              placeholder="*******"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="w-4 h-4 border border-gray-600 rounded bg-gray-700"
              />
              <label className="ml-2 text-sm text-gray-300">
                Remember Me
              </label>
            </div>
            <Link
              to="#"
              className="text-sm font-medium text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Log In
          </button>
          <p className="text-sm font-light text-gray-300 text-center">
            Don't have an account yet?{' '}
            <Link
              to="/Signup"
              className="font-medium text-blue-500 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;