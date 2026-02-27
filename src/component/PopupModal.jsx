import React from "react";

function PopupModal({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-4 sm:p-6 md:p-8">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">
          {message}
        </p>

        <div className="flex items-center mb-3 sm:mb-5 text-xs sm:text-sm md:text-base">
          <input type="checkbox" id="allow" className="mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          <label htmlFor="allow" className="text-gray-700">
            Always allow this type of link
          </label>
        </div>

        <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
          <button
            onClick={() => alert("Action triggered!")}
            className="bg-amber-200 hover:bg-amber-300 text-gray-900 font-medium px-4 py-2 rounded-full text-sm sm:text-base md:text-lg"
          >
            Proceed
          </button>
          <button
            onClick={onClose}
            className="bg-amber-900 hover:bg-amber-800 text-white font-medium px-4 py-2 rounded-full text-sm sm:text-base md:text-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;