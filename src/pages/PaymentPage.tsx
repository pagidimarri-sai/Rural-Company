// import { useNavigate, useLocation } from "react-router-dom";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { CreditCard, Banknote, Landmark } from "lucide-react";

// export default function PaymentPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedMethod, setSelectedMethod] = useState("");
//   const [loading, setLoading] = useState(false);

//   const data = await res.json();
// navigate("/success", { state: { order: data } });


//   const {
//     cartItems,
//     totalAmount,
//     tip,
//     discount,
//     address,
//     slot,
//   } = location.state || {};

//   const token = localStorage.getItem("token");

//   const handlePay = async () => {
//     if (!selectedMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("${import.meta.env.VITE_API_BASE_URL}/api/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           cartItems,
//           totalAmount,
//           tip,
//           discount,
//           address,
//           slot,
//           paymentMethod: selectedMethod,
//         }),
//       });

//       if (!res.ok) {
//         const error = await res.json();
//         throw new Error(error.message || "Order failed");
//       }

//       navigate("/success");
//     } catch (err: any) {
//       alert(`Order Error: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const PaymentOption = ({
//     icon,
//     label,
//     value,
//     description,
//   }: {
//     icon: React.ReactNode;
//     label: string;
//     value: string;
//     description?: string;
//   }) => (
//     <div
//       onClick={() => setSelectedMethod(value)}
//       className={`flex items-center justify-between px-4 py-3 rounded cursor-pointer border ${
//         selectedMethod === value
//           ? "border-purple-600 bg-purple-50"
//           : "hover:bg-gray-100"
//       }`}
//     >
//       <div className="flex items-center gap-3">
//         <div className="text-purple-600">{icon}</div>
//         <div>
//           <p className="text-sm font-medium">{label}</p>
//           {description && (
//             <p className="text-xs text-gray-500">{description}</p>
//           )}
//         </div>
//       </div>
//       {selectedMethod === value && (
//         <span className="text-sm text-purple-600 font-medium">Selected</span>
//       )}
//     </div>
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="max-w-md mx-auto p-6 bg-white rounded-lg shadow mt-6"
//     >
//       <h1 className="text-lg font-semibold mb-4">Select payment method</h1>
//       <p className="text-sm text-gray-600 mb-4">
//         Amount to pay: ₹{totalAmount + tip}
//       </p>

//       <div className="space-y-3">
//         <h2 className="text-sm font-semibold text-gray-700">Cards</h2>
//         <PaymentOption
//           icon={<CreditCard size={20} />}
//           label="Add new card"
//           value="card"
//           description="Visa, Mastercard, Rupay"
//         />

//         <h2 className="text-sm font-semibold text-gray-700 mt-4">UPI</h2>
//         <PaymentOption
//           icon={<Banknote size={20} />}
//           label="Add a new UPI ID"
//           value="upi"
//           description="Google Pay, PhonePe, etc."
//         />

//         <h2 className="text-sm font-semibold text-gray-700 mt-4">
//           Netbanking
//         </h2>
//         <PaymentOption
//           icon={<Landmark size={20} />}
//           label="Netbanking"
//           value="netbanking"
//           description="Pay using your bank"
//         />
//       </div>

//       <button
//         onClick={handlePay}
//         disabled={loading}
//         className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
//       >
//         {loading ? "Processing..." : "Pay Now"}
//       </button>
//     </motion.div>
//   );
// }

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Banknote, Landmark } from "lucide-react";

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    cartItems,
    totalAmount,
    tip = 0,
    discount = 0,
    address,
    slot,
  } = location.state || {};

  const token = localStorage.getItem("token");

  const handlePay = async () => {
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("${import.meta.env.VITE_API_BASE_URL}/api/orders", {
        method: "POST",
        headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`, // ✅ must be exact
},
        body: JSON.stringify({
          cartItems,
          totalAmount,
          tip,
          discount,
          address,
          slot,
          paymentMethod: selectedMethod,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Order failed");
      }

      const data = await res.json();
navigate("/success", { state: { order: data } });

    } catch (err: any) {
      alert(`Order Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
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
        selectedMethod === value
          ? "border-purple-600 bg-purple-50"
          : "hover:bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-purple-600">{icon}</div>
        <div>
          <p className="text-sm font-medium">{label}</p>
          {description && (
            <p className="text-xs text-gray-500">{description}</p>
          )}
        </div>
      </div>
      {selectedMethod === value && (
        <span className="text-sm text-purple-600 font-medium">Selected</span>
      )}
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
      <p className="text-sm text-gray-600 mb-4">
        Amount to pay: ₹{(totalAmount || 0) + tip - discount}
      </p>

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

        <h2 className="text-sm font-semibold text-gray-700 mt-4">
          Netbanking
        </h2>
        <PaymentOption
          icon={<Landmark size={20} />}
          label="Netbanking"
          value="netbanking"
          description="Pay using your bank"
        />
      </div>

      <button
        onClick={handlePay}
        disabled={loading}
        className="mt-6 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </motion.div>
  );
}
