// ServicePopup.tsx
import { useNavigate } from "react-router-dom";

interface SubService {
  name: string;
  icon: string;
}

interface ServicePopupProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  subServices: SubService[];
}

export default function ServicePopup({
  title,
  isOpen,
  onClose,
  subServices,
}: ServicePopupProps) {
  const navigate = useNavigate();

  const handleSubServiceClick = (serviceName: string) => {
    const formatted = serviceName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/service/${formatted}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="bg-white rounded-2xl px-6 pt-4 pb-6 w-auto max-w-full shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* Search Box */}
        {/* <input
          type="text"
          placeholder="Search for a service"
          className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        /> */}

        {/* Icons */}
        <div className="grid grid-cols-3 gap-2">
          {subServices.map((service, index) => (
            <div
              key={index}
              onClick={() => handleSubServiceClick(service.name)}
              className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-transform duration-150 hover:scale-105"
            >
              <img
                src={service.icon}
                alt={service.name}
                className="w-10 h-10 mb-1 object-cover rounded"
              />
              <p className="text-xs text-center text-gray-700">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
