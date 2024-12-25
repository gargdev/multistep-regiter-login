import React from 'react';

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center w-full mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              index + 1 <= currentStep
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`h-1 w-16 mx-2 ${
                index + 1 < currentStep ? 'bg-orange-500' : 'bg-gray-200'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
