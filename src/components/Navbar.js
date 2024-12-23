import React, { useState } from "react";
import RegistrationModal from "./RegistrationModal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <div className="text-xl font-bold">MyApp</div>
      <div>
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
          onClick={openModal}
        >
          Sign Up
        </button>
      </div>
      {isModalOpen && <RegistrationModal onClose={closeModal} />}
    </nav>
  );
}

export default Navbar;
