import React from "react";

interface SubService {
  name: string;
  icon: string;
}

interface ServicePopupProps {
  isOpen: boolean;
  title: string;
  subServices: SubService[];
  onClose: () => void;
}

const ServicePopup: React.FC<ServicePopupProps> = ({ isOpen, title, subServices, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>

        {/* Grid of services */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {subServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md cursor-pointer transition"
            >
              <img
                src={service.icon}
                alt={service.name}
                className="w-10 h-10 object-contain mb-2"
              />
              <p className="text-sm text-center font-medium text-gray-700">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;
