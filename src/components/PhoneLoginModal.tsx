// src/components/PhoneLoginModal.tsx
import { useState } from "react";

import { createPortal } from "react-dom";
import { HiShieldCheck } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/urban-logo.png";

export default function PhoneLoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (phone.trim().length === 10) {
      setStep("otp");
      setError("");
    } else {
      setError("Please enter a valid 10-digit phone number.");
    }
  };

  const handleVerify = () => {
    if (otp === "123456") {
      alert("✅ OTP Verified! You are logged in.");
      onClose();
      setStep("login");
      setPhone("");
      setOtp("");
    } else {
      setError("Invalid OTP. Try 123456 for testing.");
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="bg-white w-full max-w-sm mx-4 p-6 rounded-xl shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose size={22} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Rural Company" className="h-12" />
        </div>

        {/* Step 1: Enter Phone */}
        {step === "login" && (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Enter your phone number
            </h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
              We’ll send you a text with a verification code.
            </p>
            <div className="flex items-center border rounded-lg px-3 py-2 mb-3">
              <span className="text-gray-700 mr-2">+91</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="flex-1 outline-none text-sm"
              />
            </div>
            {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
            <button
              onClick={handleContinue}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Continue
            </button>
            <p className="text-xs text-gray-400 mt-4 text-center">
              By continuing, you agree to our <span className="underline">T&C</span> and{" "}
              <span className="underline">Privacy Policy</span>.
            </p>
          </>
        )}

        {/* Step 2: OTP Verification */}
        {step === "otp" && (
          <>
            <div className="flex flex-col items-center justify-center mb-4">
              <HiShieldCheck className="text-purple-600 text-4xl mb-2" />
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                Enter Verification Code
              </h2>
              <p className="text-sm text-gray-600 text-center">
                A 6-digit verification code has been sent to{" "}
                <span className="font-medium text-gray-700">+91 {phone}</span>
              </p>
            </div>

            <input
              type="text"
              placeholder="Enter OTP (try 123456)"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mb-3 outline-none text-sm"
            />
            {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
            <button
              onClick={handleVerify}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
