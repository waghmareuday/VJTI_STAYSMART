import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
     <div  className="bg-gray-50 dark:bg-gray-900 h-screen   absolute left-0 top-0 w-full z-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <img className="w-8 h-8 mr-2 " src="https://cdn.pixabay.com/photo/2024/01/28/16/18/ai-generated-8537859_1280.png" alt="LOGO"/><p className="text-gray-300 py-6 font-serif text-xl">VJTI STAY SMART</p>

            <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-600 shadow-lg shadow-slate-400">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                    Log In Your Account
                </h1>
            
            
                <form  className="space-y-4 md:space-y-6">
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900d dark:text-white">Your Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"/>
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="*******"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex">
                            <div className="flex items-center h-5">
                            <input type="checkbox" name="remember" id="remember" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="text-gray-500 dark:text-gray-300">Remember Me</label>
                            </div>
                        </div>
                    
                                <Link to="#" className="text-sm font-medium text-primary-600 hover:underline text-blue-500 hover:text-blue-300">forget Password?</Link>
                    </div>
                        <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-cente " >Log In</button>
                
                <p className="text-sm font-light text-gray-900 dark:text-gray-300 py-8 px-5 text-center">Don't Have an Account yet ? <Link to="/Signup" className="font-medium hover:underline text-blue-500 hover:text-blue-300">Sign Up</Link>
                </p>    
            </form>
            </div>
            </div>
        </div>    
    </div>
    </>
  )
}

export default Login