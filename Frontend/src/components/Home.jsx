import React from "react";
import hostelImg from "../assets/hostelimg.jpg";
function Home() {
  return (
    <>
      {/* <!-- Main Section (Front) --> */}
      <div class="front flex flex-col md:flex-row h-screen bg-gray-800">
        {/* <!-- Text Section --> */}
        <div class="front1 w-full md:w-1/2 flex flex-col items-center justify-center p-8 relative bg-gradient-to-br">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-blue-400 transition-transform duration-300 hover:scale-105">
            Welcome to VJTI StaySmart
          </h1>
          <p class="text-center text-lg md:text-xl font-medium leading-relaxed text-gray-300 transition-opacity duration-500 hover:opacity-90">
            Experience comfort, convenience, and collaboration at your hostel.
            <br /> Stay connected, stay inspired, and make every day count.
          </p>
          <p class="mt-6 text-sm italic text-gray-300">
            "Redefining hostel living for the modern student."
          </p>
          <a
            href="#gallery"
            class="mt-8 px-6 py-3 bg-indigo-600 text-white text-sm font-semibold uppercase rounded-lg shadow-md transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg transform hover:scale-105"
          >
            Explore Gallery
          </a>
        </div>

        {/* <!-- Image Section --> */}
        <div class="front2 w-full md:w-1/2 flex items-center justify-center relative">
          <img src={hostelImg}
            alt="Hostel Life"
            class="max-w-4xl h-4/5 object-cover rounded-2xl shadow-2xl shadow-white transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
