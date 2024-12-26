import React, { useState } from "react";

const BudgetOption = ({ range, value, selected, onClick }) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
      selected 
        ? 'border-2 border-orange-500 bg-orange-50' 
        : 'border border-gray-200 hover:border-orange-200'
    }`}
  >
    <div className="flex items-center space-x-3">
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
        ${selected ? 'border-orange-500' : 'border-gray-300'}`}>
        {selected && <div className="w-3 h-3 rounded-full bg-orange-500" />}
      </div>
      <span className="text-lg font-medium text-gray-900">{range}</span>
    </div>
  </div>
);

const Step3BudgetDescription = ({ formData, onNext, onPrev }) => {
  const [selectedBudget, setSelectedBudget] = useState(formData?.budget || "");

  const budgetRanges = [
    { display: "$5,000 - $10,000", value: "5000-10000" },
    { display: "$10,000 - $20,000", value: "10000-20000" },
    { display: "$20,000 - $50,000", value: "20000-50000" },
    { display: "$50,000+", value: "50000+" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold text-[#1D1B20]">What's your event budget?</h3>
        <p className="text-orange-500 mt-1">Please select the event budget range you have in mind.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {budgetRanges.map((budget) => (
          <BudgetOption
            key={budget.value}
            range={budget.display}
            value={budget.value}
            selected={selectedBudget === budget.value}
            onClick={() => setSelectedBudget(budget.value)}
          />
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button
          onClick={onPrev}
          className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-50 transition duration-300"
        >
          Previous step
        </button>
        <button
          onClick={() => onNext({ budget: selectedBudget })}
          className="px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition duration-300"
          disabled={!selectedBudget}
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default Step3BudgetDescription;

