import React, { useState, useEffect } from "react";
import Step1ContactDetails from "./RequirementSteps/Step1ContactDetails";
import Step2EventDetails from "./RequirementSteps/Step2EventDetails";
import Step3BudgetDescription from "./RequirementSteps/Step3BudgetDescription";
import Step4ReviewSubmit from "./RequirementSteps/Step4ReviewSubmit";

const MultistepFormModal = ({ onClose, initialStep = 1 }) => {
  const [step, setStep] = useState(initialStep);
  const [formData, setFormData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);
    closeModal();
  };

  const steps = [
    { title: "Contact Details", component: Step1ContactDetails },
    { title: "Event Details", component: Step2EventDetails },
    { title: "Budget & Description", component: Step3BudgetDescription },
    { title: "Review & Submit", component: Step4ReviewSubmit },
  ];

  const CurrentStep = steps[step - 1].component;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"
        onClick={closeModal}
      ></div>

      <div className="flex min-h-full bg-white justify-center p-4 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out">
        <div className="flex flex-col gap-8 p-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Event Registration
            </h2>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          <div className="">
            <div className="flex">
              {steps.map((s, index) => (
                <div
                  key={index}
                  className={`flex-1 border-b-2 mt-4 mb-3 ${
                    index < step ? "border-orange-500" : "border-gray-200"
                  }`}
                >
                  <div
                    className={`text-center pb-2 mt-2 mb-3 ${
                      index < step ? "text-orange-500" : "text-gray-500"
                    }`}
                  >
                    Step {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-5 mt-3">
            <CurrentStep
              formData={formData}
              onNext={handleNext}
              onPrev={handlePrev}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultistepFormModal;
