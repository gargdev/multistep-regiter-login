import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import CreateAccount from "./steps/CreateAccount";
import Purpose from "./steps/Purpose";
import Role from "./steps/Role";
import Experience from "./steps/Experience";
import Completion from "./steps/Completion";
import Login from "./steps/Login";
import { registerUser } from "../api/axios";

export default function RegistrationModal({ onClose, initialStep = 1 }) {
  const [step, setStep] = useState(initialStep); // Step state for registration flow
  const [formData, setFormData] = useState({}); // Form data to pass between steps
  const [isVisible, setIsVisible] = useState(false); // Control visibility for transitions

  useEffect(() => {
    setStep(initialStep); // Update step when initialStep changes
  }, [initialStep]);

  useEffect(() => {
    setIsVisible(true); // Trigger open transition
  }, []);

  const closeModal = () => {
    setIsVisible(false); // Trigger close transition
    setTimeout(onClose, 300); // Delay unmounting to match transition duration
  };

  const handleNext = async (data) => {
    setFormData((prev) => ({ ...prev, ...data }));

    if (step === 2) {
      if (data.purpose === "plan") {
        // Submit data for "Plan" purpose
        await handleSubmit({ ...formData, ...data });
        setStep("login");
      } else if (data.purpose === "organize") {
        setStep(3); // Move to Role selection
      }
    } else if (step === 4) {
      // Submit final data for "Organize" purpose
      await handleSubmit({ ...formData, ...data });
      setStep(5);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleSubmit = async (data) => {
    try {
       await registerUser(data);
      alert("Registration successful!");
    } catch (err) {
      alert(err.message);
    }
  };
  const previousStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleGoToLogin = () => {
    setStep("login");
  };

  const handleGoToRegister = () => {
    setStep(1);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Dialog open={true} onClose={closeModal}>
      <div
        className={`fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBackdropClick}
      >
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            className={`rounded-xl mt-14 bg-white p-6 backdrop-blur-2xl transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {step === 1 && (
              <CreateAccount
                onNext={handleNext}
                onGoToLogin={handleGoToLogin}
              />
            )}
            {step === 2 && <Purpose onNext={handleNext} />}
            {step === 3 && <Role onNext={handleNext} onPrev={previousStep} />}
            {step === 4 && (
              <Experience onNext={handleNext} onPrev={previousStep} />
            )}
            {step === 5 && <Completion data={formData} onPrev={previousStep} />}
            {step === "login" && (
              <Login onClose={closeModal} onGotoRegister={handleGoToRegister} />
            )}

            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner focus:outline-none hover:bg-gray-600"
                onClick={closeModal}
              >
                Got it, thanks!
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
