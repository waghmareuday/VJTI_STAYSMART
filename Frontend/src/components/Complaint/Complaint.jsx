import React, { useState } from "react";
import { motion } from "framer-motion";

function ComplaintForm({ user }) {
  const [complaintType, setComplaintType] = useState("hostel"); // Default to hostel
  const [complaintDetails, setComplaintDetails] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [name, setName] = useState(user?.name || ""); // Detect user name
  const [email, setEmail] = useState(user?.email || ""); // Detect user email

  const handleComplaintChange = (e) => {
    setComplaintDetails(e.target.value);
  };

  const handleAnonymousChange = () => {
    setIsAnonymous(!isAnonymous);
    if (!isAnonymous) {
      setName(""); // Clear name when anonymous
      setEmail(""); // Clear email when anonymous
    } else {
      setName(user?.name || ""); // Re-set user details when not anonymous
      setEmail(user?.email || ""); // Re-set user details when not anonymous
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting complaint (e.g., API call)
    console.log("Complaint submitted:", {
      complaintType,
      complaintDetails,
      name,
      email,
      isAnonymous,
    });
    alert("Complaint submitted successfully!");
  };

  return (
    <div className="py-12 bg-gradient-to-r from-[#1f2937] to-[#111827] text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
        <motion.h2
          className="text-3xl font-bold text-[#60a5fa] text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {complaintType === "hostel" ? "Hostel Complaint" : "Mess Complaint"}
        </motion.h2>
        
        <form onSubmit={handleSubmit}>
          {/* Complaint Type Switch */}
          <div className="flex justify-center mb-6">
            <button
              type="button"
              className={`px-6 py-2 mx-2 rounded-full text-white font-semibold transition-all duration-300 ${
                complaintType === "hostel" ? "bg-[#60a5fa]" : "bg-gray-700"
              }`}
              onClick={() => setComplaintType("hostel")}
            >
              Hostel
            </button>
            <button
              type="button"
              className={`px-6 py-2 mx-2 rounded-full text-white font-semibold transition-all duration-300 ${
                complaintType === "mess" ? "bg-[#60a5fa]" : "bg-gray-700"
              }`}
              onClick={() => setComplaintType("mess")}
            >
              Mess
            </button>
          </div>

          {/* Name and Email */}
          {!isAnonymous && (
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-lg text-gray-300">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md"
                  placeholder="Your name"
                  disabled={isAnonymous}
                />
              </div>

              <div>
                <label className="block text-lg text-gray-300">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md"
                  placeholder="Your email"
                  disabled={isAnonymous}
                />
              </div>
            </div>
          )}

          {/* Complaint Details */}
          <div className="mb-6">
            <label className="block text-lg text-gray-300">Complaint Details</label>
            <textarea
              value={complaintDetails}
              onChange={handleComplaintChange}
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md"
              placeholder="Describe your complaint"
              rows="6"
            ></textarea>
          </div>

          {/* Anonymous Option */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={handleAnonymousChange}
              className="mr-2"
            />
            <span className="text-gray-300">Submit Anonymously</span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#60a5fa] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComplaintForm;
