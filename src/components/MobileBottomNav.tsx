import { FaHome, FaUser } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { PiWallFill } from "react-icons/pi";
import { GiWaterDrop } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function MobileBottomNav({ onAccountClick }: { onAccountClick: () => void }) {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around items-center py-2 z-50 md:hidden">
      <button
        onClick={() => navigate("/")}
        className="flex flex-col items-center text-xs text-gray-700 hover:text-purple-600"
      >
        <FaHome size={18} />
        <span>UC</span>
      </button>

      <button
        onClick={() => navigate("/beauty")}
        className="flex flex-col items-center text-xs text-gray-700 hover:text-purple-600"
      >
        <MdHomeRepairService size={20} />
        <span>Beauty</span>
      </button>

      <button
        onClick={() => navigate("/home")}
        className="flex flex-col items-center text-xs text-gray-700 hover:text-purple-600"
      >
        <PiWallFill size={20} />
        <span>Wall</span>
      </button>

      <button
        onClick={() => navigate("/native")}
        className="flex flex-col items-center text-xs text-gray-700 hover:text-purple-600"
      >
        <GiWaterDrop size={20} />
        <span>Native</span>
      </button>

      <button
        onClick={onAccountClick}
        className="flex flex-col items-center text-xs text-gray-700 hover:text-purple-600"
      >
        <FaUser size={18} />
        <span>Account</span>
      </button>
    </nav>
  );
}
