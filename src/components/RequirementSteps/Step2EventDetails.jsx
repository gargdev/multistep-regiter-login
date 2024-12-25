import React, { useState } from "react";

const Step2EventDetails = ({ formData, onNext, onPrev }) => {
  const [data, setData] = useState({
    dateType: "",
    singleDate: "",
    startDate: "",
    endDate: "",
    guests: "",
    eventType: "",
    ...formData
  });

  const handleChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Event Details</h3>
      <div className="space-y-2">
        <select
          name="dateType"
          value={data.dateType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Date Type</option>
          <option value="single">Single Date</option>
          <option value="range">Date Range</option>
        </select>
        {data.dateType === "single" ? (
          <input
            type="date"
            name="singleDate"
            value={data.singleDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        ) : (
          <>
            <input
              type="date"
              name="startDate"
              value={data.startDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="date"
              name="endDate"
              value={data.endDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </>
        )}
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={data.guests}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <select
          name="eventType"
          value={data.eventType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Event Type</option>
          <option value="corporate">Corporate</option>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday</option>
          <option value="conference">Conference</option>
          <option value="seminar">Seminar</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onPrev}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
        >
          Back
        </button>
        <button
          onClick={() => onNext(data)}
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2EventDetails;

