import React, { useState } from "react";

function AppointmentButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center mt-10 px-4">
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="h-10 w-full max-w-xs sm:max-w-sm bg-blue-950 text-white font-semibold rounded-3xl p-2 cursor-pointer hover:-translate-y-1 transition-transform duration-300"
      >
        Make Appointment
      </button>

      {/* Popup / Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm sm:max-w-md p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Open Pick an app?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              https://theroyalskinaesthetics.com wants to open this application.
            </p>

            <div className="flex items-start mb-5">
              <input type="checkbox" id="allow" className="mr-2 mt-1" />
              <label htmlFor="allow" className="text-sm sm:text-base text-gray-700">
                Always allow theroyalskinaesthetics.com to open links of this type
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
              <button
                onClick={() => alert("Opening App...")}
                className="w-full sm:w-auto bg-amber-200 hover:bg-amber-300 text-gray-900 font-medium px-4 py-2 rounded-full"
              >
                Open Pick an app
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto bg-amber-900 hover:bg-amber-800 text-white font-medium px-4 py-2 rounded-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentButton;