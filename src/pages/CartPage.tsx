import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <FaShoppingCart className="text-6xl text-purple-600 mb-6" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-6 text-center">Let’s add some services</p>
      <button
        onClick={() => navigate("/")}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
      >
        Explore Services
      </button>
    </div>
  );
}
