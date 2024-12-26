import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegistrationModal from "./RegistrationModal";
import { FaBars, FaTimes } from "react-icons/fa";
import MultistepFormModal from "./ModernEventForm/MultistepFormModal";

function Navbar() {
  const navigate = useNavigate();

  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isMultistepFormModalOpen, setIsMultistepFormModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1); // Default to the first step
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state

// Open and close modal functions
const openRegistrationModal = (step) => {
  setModalStep(step); // Set the step for the registration modal
  setIsRegistrationModalOpen(true);
};
const closeRegistrationModal = () => setIsRegistrationModalOpen(false);

const openMultistepFormModal = () => setIsMultistepFormModalOpen(true);
const closeMultistepFormModal = () => setIsMultistepFormModalOpen(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const logout = () => {
    // Remove user details on logout
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    localStorage.removeItem("purpose");
    navigate("/"); // Redirect to home page
  };

  const isLoggedIn = !!localStorage.getItem("authToken"); // Check login status

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-orange-500" />
          <span className="text-xl font-bold text-orange-500">Gopratle</span>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>
        <button 
          onClick={openMultistepFormModal}
          className="hover:text-orange-500">
          Plan your event
        </button>
        <Link to="/help" className="hover:text-orange-500">
          Help center
        </Link>
      </div>

      {/* Mobile Drawer Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleDrawer}
          className="text-orange-500 focus:outline-none"
        >
          {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Drawer for Mobile and Tablet */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-xl font-bold text-orange-500">Gopratle</span>
          <button
            onClick={toggleDrawer}
            className="text-orange-500 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col w-full items-start gap-4 px-6 py-6">
          <Link
            to="/"
            onClick={toggleDrawer}
            className="flex justify-between items-center border-b-2 w-full hover:text-orange-500"
          >
            Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
          <button
            onClick={() => {
              openMultistepFormModal();
              toggleDrawer();
            }}
            className="flex justify-between items-center border-b-2 w-full hover:text-orange-500"
          >
            Plan your event
          </button>
          <Link
            to="/help"
            onClick={toggleDrawer}
            className="flex justify-between items-center hover:text-orange-500 border-b-2 w-full"
          >
            Help center
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                logout();
                toggleDrawer();
              }}
              className="px-6 py-2 w-full text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  openRegistrationModal("login");
                  toggleDrawer();
                }}
                className="px-6 w-full py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  openRegistrationModal(1);
                  toggleDrawer();
                }}
                className="px-6 py-2 w-full text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="hidden md:flex items-center justify-center gap-5">
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="px-6 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => openRegistrationModal("login")}
              className="px-6 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => openRegistrationModal(1)}
              className="px-6 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
            >
              Register
            </button>
          </>
        )}
      </div>

      {/* Modals */}
      {isRegistrationModalOpen && (
        <RegistrationModal onClose={closeRegistrationModal} initialStep={modalStep} />
      )}
      {isMultistepFormModalOpen && (
        <MultistepFormModal
          isOpen={isMultistepFormModalOpen}
          onClose={closeMultistepFormModal}
        />
      )}
    </nav>
  );
}

export default Navbar;
