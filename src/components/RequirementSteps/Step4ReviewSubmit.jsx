import React from "react";

const Step4ReviewSubmit = ({ formData, onPrev, onSubmit }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Review & Submit</h3>
      <div className="bg-gray-100 p-4 rounded-md">
        <pre className="whitespace-pre-wrap break-words text-sm text-gray-700">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onPrev}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4ReviewSubmit;

