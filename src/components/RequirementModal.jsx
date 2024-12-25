import React, { useState } from "react";
import Step1ContactDetails from "./RequirementSteps/Step1ContactDetails";
import Step2EventDetails from "./RequirementSteps/Step2EventDetails";
import Step3BudgetDescription from "./RequirementSteps/Step3BudgetDescription";
import Step4ReviewSubmit from "./RequirementSteps/Step4ReviewSubmit";

const RequirementModal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateType: "single",
    singleDate: "",
    startDate: "",
    endDate: "",
    guests: 1,
    eventType: "",
    budgetMin: "",
    budgetMax: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    console.log("Form Data:", formData);
  };

  const steps = [
    <Step1ContactDetails formData={formData} handleInputChange={handleInputChange} />,
    <Step2EventDetails formData={formData} handleInputChange={handleInputChange} />,
    <Step3BudgetDescription formData={formData} handleInputChange={handleInputChange} />,
    <Step4ReviewSubmit formData={formData} />,
  ];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Event Planning Form</h2>
      {steps[step - 1]}
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Back
          </button>
        )}
        {step < steps.length && (
          <button
            onClick={nextStep}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
        {step === steps.length && (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default RequirementModal;
