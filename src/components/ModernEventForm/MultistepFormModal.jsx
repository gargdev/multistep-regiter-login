import React, { useState, useEffect } from "react";
import Step1ContactDetails from "./Step1ContactDetails";
import Step2EventDetails from "./Step2EventDetails";
import Step3BudgetDescription from "./Step3BudgetDescription";
import Step4ReviewSubmit from "./Step4ReviewSubmit";

const MultistepFormModal = ({ onClose, initialStep = 1 }) => {
  const [step, setStep] = useState(initialStep);
  const [formData, setFormData] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeModal = (e) => {
    if (e && e.target !== e.currentTarget) return;
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleNext = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);
    closeModal();
  };

  const steps = [
    { title: "Contact Details", component: Step1ContactDetails },
    { title: "Event Details", component: Step2EventDetails },
    { title: "Budget", component: Step3BudgetDescription },
    { title: "Review", component: Step4ReviewSubmit },
  ];

  const CurrentStep = steps[step - 1].component;

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}></div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-[20px] shadow-xl w-full max-w-xl transform transition-all duration-300 ease-in-out z-10 relative">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#1D1B20]">Plan your event!</h2>
              <p className="text-gray-500 mt-2">Quick and easy event planning</p>
            </div>
            <div className="mb-8">
              <div className="flex items-center justify-between relative">
                {steps.map((s, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                        ${index < step ? 'bg-orange-500 text-white' : 
                          index === step - 1 ? 'bg-orange-500 text-white' : 
                          'bg-gray-200 text-gray-500'}`}>
                        {index + 1}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-[2px] mx-2 
                        ${index < step - 1 ? 'bg-orange-500' : 'bg-gray-200'}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="mt-6">
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
    </div>
  );
};

export default MultistepFormModal;

