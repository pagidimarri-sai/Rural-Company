// File: src/pages/CartPage.tsx
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, cartTotal } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <FaShoppingCart className="text-6xl text-purple-600 mb-6" />
          <p className="text-gray-600 mb-6 text-center">Your cart is empty. Let’s add some services.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Explore Services
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white shadow rounded p-4 flex justify-between items-center">
              <div>
                <h4 className="text-gray-800 font-medium">{item.title}</h4>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-purple-600 font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className="mt-2 text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
                >
                  <FaTrashAlt /> Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-bold text-purple-700 mt-6">
            Total: ₹{cartTotal.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
