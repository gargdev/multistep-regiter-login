import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

function MobileDrawer({
  isOpen,
  onClose,
  isLoggedIn,
  onLoginClick,
  onRegisterClick,
  onLogout,
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out lg:hidden`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed right-0 h-full w-64 bg-white shadow-xl">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <Link
            to="/"
            className="p-2 hover:bg-orange-50 rounded-lg hover:text-orange-500"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/plan"
            className="p-2 hover:bg-orange-50 rounded-lg hover:text-orange-500"
            onClick={onClose}
          >
            Plan your event
          </Link>
          <Link
            to="/help"
            className="p-2 hover:bg-orange-50 rounded-lg hover:text-orange-500"
            onClick={onClose}
          >
            Help center
          </Link>
          <div className="border-t border-gray-200 my-4" />
          {isLoggedIn ? (
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full px-4 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  onLoginClick();
                  onClose();
                }}
                className="w-full px-4 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => {
                  onRegisterClick();
                  onClose();
                }}
                className="w-full px-4 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileDrawer;
