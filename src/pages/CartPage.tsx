import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

export default function CartPage() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, applyPromoCode, discount } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  const handleApplyPromo = () => {
    const success = applyPromoCode(promoInput);
    setPromoMessage(success ? "Promo applied!" : "Invalid code");
  };

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
              <p className="text-purple-600 font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}

          <div className="bg-white shadow rounded p-4">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Apply Promo Code</h4>
            <div className="flex gap-2">
              <input
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Enter code"
                className="border rounded px-3 py-2 w-full text-sm"
              />
              <button
                onClick={handleApplyPromo}
                className="bg-purple-600 text-white px-4 rounded hover:bg-purple-700 text-sm"
              >
                Apply
              </button>
            </div>
            {promoMessage && (
              <p className={`text-sm mt-2 ${discount > 0 ? "text-green-600" : "text-red-500"}`}>
                {promoMessage}
              </p>
            )}
          </div>

          <div className="text-right mt-6">
            {discount > 0 && <p className="text-sm text-green-600">Discount: -₹{discount.toFixed(2)}</p>}
            <p className="text-lg font-bold text-purple-700">Total: ₹{cartTotal.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
