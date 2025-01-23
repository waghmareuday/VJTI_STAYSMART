import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar h-24 w-full bg-gray-800 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="logo text-2xl text-white font-bold">VJTI StaySmart</div>

      {/* Navbar Links */}
      <div className="feature text-white text-xl flex items-center gap-6">
        <button className="hover:text-blue-500"><Link to="/">Home</Link></button>

        {/* Hostel Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 text-white font-medium rounded-lg hover:text-blue-500 transition-all duration-300">
            <span>Hostel</span>
            <span className="text-sm transition-transform duration-300">
              &#x25BC;
            </span>
          </button>
          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 w-40 bg-white text-black border border-gray-300 shadow-lg rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 scale-95 z-10">
            <Link to="RoomAllotment" className="block px-4 py-2 hover:bg-gray-200">
            Room Allotment
            </Link>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Events
            </a>
            <Link to="LostnFound" className="block px-4 py-2 hover:bg-gray-200">
              Lost and Found
            </Link>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Community Forum
            </a>
            <Link to="HostelFeedback" className="block px-4 py-2 hover:bg-gray-200">
              Feedback
            </Link>
            <Link to="HostelLeavingForm" className="block px-4 py-2 hover:bg-gray-200"> 
            Hostel Leaving Registration
            </Link>
          </div>
        </div>

        {/* Mess Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 text-white font-medium rounded-lg hover:text-blue-500 transition-all duration-300">
            <span>Mess</span>
            <span className="text-sm transition-transform duration-300">
              &#x25BC;
            </span>
          </button>
          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-2 w-40 bg-white text-black border border-gray-300 shadow-lg rounded opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 scale-95 z-10">
            <Link to="MessBill" className="block px-4 py-2 hover:bg-gray-200">
            Mess Bill
            </Link>
            <Link to="MessFeedback" className="block px-4 py-2 hover:bg-gray-200">
              Feedback
            </Link>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Schedule and Menu
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Mess Off Facility
            </a>
          </div>
        </div>

        {/* Other Buttons */}
        <button className="hover:text-blue-500">Complaint</button>

        {/* Dark Mode Toggle Icon */}
        <button id="dark-mode-toggle" className="text-white hover:text-blue-500">
          🌙
        </button>

        <button className="px-4 py-2 border border-blue-500 rounded-md hover:bg-blue-500 transition">
          <Link to="/login">Login</Link>
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition">
          <Link to="/Signup">Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
