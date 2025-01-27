import React, { useState } from 'react';
import Listings from './Listings';

function LostFoundForm() {
  const [itemType, setItemType] = useState('');
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  
  const handleSubmit = () => {
    if (itemType && itemName && description && location && contact) {
      alert('Form submitted successfully!');
      // Logic to update listings (will be covered in Listings.jsx)
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="bg-gray-800  shadow-md p-6 w-100 h-full flex flex-col justify-center items-center pb-4 pt-24">
      <section className="text-center mb-8">
          <h1 className="headline text-4xl font-bold mb-4 text-[#60a5fa]">Lost and Found</h1>
          <p className="text-white">
            If you have lost or found an item on campus, please submit the details below.
          </p>
        </section>
    <div className="bg-gray-700 rounded-lg shadow-md p-6 w-[60%] ">
      
      <form className="space-y-4">
        <div className="form-group">
          <label htmlFor="itemType" className="block text-white font-semibold">Type of Item:</label>
          <select
            id="itemType"
            name="itemType"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            required
          >
            <option value="">Select...</option>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="itemName" className="block text-white font-semibold">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="E.g., Laptop, Wallet"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="block text-white font-semibold">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide details about the item."
            rows="4"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="location" className="block text-white font-semibold">Last Seen/Found Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="E.g., Hostel Room 101"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact" className="block text-white font-semibold">Contact Information:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Email or Phone Number"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="contact" className="block text-white font-semibold">Upload Image (Optional):</label>
        <input type='file'  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" />
</div>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn w-full p-2 text-white rounded font-semibold bg-blue-700 hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>

    <Listings/>

    </div>
  );
}

export default LostFoundForm;
