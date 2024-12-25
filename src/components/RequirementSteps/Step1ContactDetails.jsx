import React, { useState } from "react";

const Step1ContactDetails = ({ formData, onNext }) => {
  const [data, setData] = useState({ fullName: "", email: "", phoneNumber: "", ...formData });

  const handleChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Contact Details</h3>
      <div className="space-y-2">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={data.fullName}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={data.phoneNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <button
        onClick={() => onNext(data)}
        className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default Step1ContactDetails;

