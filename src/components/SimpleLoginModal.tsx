import { useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: any) => void;
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!name || !email || phone.length !== 10) {
      setError("Please enter valid name, email and 10-digit phone number.");
      return;
    }

    try {
      const res = await axios.post("${import.meta.env.VITE_API_BASE_URL}/api/auth/register", {
        name,
        email,
        phone,
      });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      onLoginSuccess(user);
      onClose();
    } catch (err) {
      setError("Login failed. Try again.");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="bg-white w-full max-w-sm mx-4 p-6 rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose size={22} />
        </button>

        <div className="flex justify-center mb-4">
          <img src="/assets/urban-logo.png" alt="Rural Company" className="h-12" />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          Enter your details to continue
        </h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full border rounded-lg px-3 py-2 mb-3 outline-none text-sm"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full border rounded-lg px-3 py-2 mb-3 outline-none text-sm"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="10-digit phone number"
          className="w-full border rounded-lg px-3 py-2 mb-3 outline-none text-sm"
        />
        {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Continue
        </button>
      </div>
    </div>,
    document.body
  );
}
