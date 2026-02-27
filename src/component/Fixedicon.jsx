import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import PopupModal from "./PopupModal";

function Fixedicon() {
  const [popupData, setPopupData] = useState({ isOpen: false, title: "", message: "" });

  const openPopup = (type) => {
    if (type === "call") {
      setPopupData({
        isOpen: true,
        title: "Open Phone App?",
        message: "https://theroyalskinaesthetics.com wants to open your dialer to make a call.",
      });
    } else if (type === "whatsapp") {
      setPopupData({
        isOpen: true,
        title: "Open WhatsApp?",
        message: "https://theroyalskinaesthetics.com wants to open WhatsApp to start a chat.",
      });
    }
  };

  const closePopup = () => {
    setPopupData({ isOpen: false, title: "", message: "" });
  };

  return (
    <div >
      {/* Call Icon */}
      <div className="fixed bottom-20 right-5 group">
        <div
          className="text-3xl rounded-full bg-amber-500 p-3 cursor-pointer hover:bg-gray-700 hover:text-amber-400"
          onClick={() => openPopup("call")}
        >
          <IoCall />
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 text-sm bg-gray-700 text-amber-500 px-2 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            Call
          </span>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-3 right-5 group">
        <div
          className="text-4xl rounded-full p-2.5 bg-green-600 cursor-pointer hover:bg-gray-700 hover:text-green-600"
          onClick={() => openPopup("whatsapp")}
        >
          <FaWhatsappSquare />
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 text-sm bg-gray-700 text-green-600 px-2 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            WhatsApp
          </span>
        </div>
      </div>

      {/* Shared Popup */}
      <PopupModal
        isOpen={popupData.isOpen}
        onClose={closePopup}
        title={popupData.title}
        message={popupData.message}
      />
    </div>
  );
}

export default Fixedicon;
