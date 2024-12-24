import React, { useState } from "react";
import RegistrationModal from "./RegistrationModal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1); // Default to the first step

  // Open and close modal functions
  const openModal = (step) => {
    setModalStep(step); // Set the step based on the button clicked
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <div className="text-xl font-bold">MyApp</div>
      <div className="flex items-center justify-center gap-5">
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          onClick={() => openModal(1)} // Open Sign Up step
        >
          Sign Up
        </button>
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          onClick={() => openModal('login')} // Open Login step
        >
          Login
        </button>
      </div>
      {isModalOpen && <RegistrationModal onClose={closeModal} initialStep={modalStep} />}
    </nav>
  );
}

export default Navbar;
