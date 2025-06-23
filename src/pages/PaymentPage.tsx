import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Banknote, Landmark } from "lucide-react";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("");

  const handlePay = () => {
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }
    navigate("/success");
  };

  const PaymentOption = ({
    icon,
    label,
    value,
    description,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
    description?: string;
  }) => (
    <div
      onClick={() => setSelectedMethod(value)}
      className={`flex items-center justify-between px-4 py-3 rounded cursor-pointer border ${
        selectedMethod === value ? "border-purple-600 bg-purple-50" : "hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-purple-600">{icon}</div>
        <div>
          <p className="text-sm font-medium">{label}</p>
          {description && <p className="text-xs text-gray-500">{description}</p>}
        </div>
      </div>
      {selectedMethod === value && <span className="text-sm text-purple-600 font-medium">Selected</span>}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow mt-6"
    >
      <h1 className="text-lg font-semibold mb-4">Select payment method</h1>
      <p className="text-sm text-gray-600 mb-4">Amount to pay: ₹4595</p>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-700">Cards</h2>
        <PaymentOption
          icon={<CreditCard size={20} />}
          label="Add new card"
          value="card"
          description="Visa, Mastercard, Rupay"
        />

        <h2 className="text-sm font-semibold text-gray-700 mt-4">UPI</h2>
        <PaymentOption
          icon={<Banknote size={20} />}
          label="Add a new UPI ID"
          value="upi"
          description="Google Pay, PhonePe, etc."
        />

        <h2 className="text-sm font-semibold text-gray-700 mt-4">Netbanking</h2>
        <PaymentOption
          icon={<Landmark size={20} />}
          label="Netbanking"
          value="netbanking"
          description="Pay using your bank"
        />
      </div>

      <button
        onClick={handlePay}
        className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
      >
        Pay Now
      </button>
    </motion.div>
  );
}
