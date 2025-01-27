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

            <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-600 shadow-lg shadow-slate-400">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                    Sign Up
                </h1>
            
            
                <form  className="space-y-4 md:space-y-6">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900d dark:text-white">Your Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"/>
                    </div>
                    <div>
                        <label for="collegeId" className="block mb-2 text-sm font-medium text-gray-900d dark:text-white">Your College Id</label>
                        <input type="number" name="collegeId" id="collegeId" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="24#######"/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> New Password</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="*******"/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="*******"/>
                    </div>
                    <div className="flex-col items-center justify-between">
                      
                        <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</button>
                        <p className="text-sm font-light text-gray-900 dark:text-gray-300 py-8 px-5 text-center">Already have an Account ? <Link to="/login" className="font-medium hover:underline text-blue-500 hover:text-blue-300">Log In</Link>
                        </p>    
                    </div>
                </form>
            </div>
            </div>
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