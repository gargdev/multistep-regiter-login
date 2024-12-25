import React, { useState } from "react";

const Step3BudgetDescription = ({ formData, onNext, onPrev }) => {
  const [data, setData] = useState({
    budgetMin: "",
    budgetMax: "",
    description: "",
    ...formData
  });

  const handleChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Budget & Description</h3>
      <div className="space-y-2">
        <div className="flex space-x-2">
          <input
            type="number"
            name="budgetMin"
            placeholder="Minimum Budget"
            value={data.budgetMin}
            onChange={handleChange}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="number"
            name="budgetMax"
            placeholder="Maximum Budget"
            value={data.budgetMax}
            onChange={handleChange}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <textarea
          name="description"
          placeholder="Event Description"
          value={data.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-24 resize-none"
        />
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

export default Step3BudgetDescription;

