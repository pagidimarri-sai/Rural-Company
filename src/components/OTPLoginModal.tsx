import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiShieldCheck } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";

import axios from "axios";

interface OTPLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: any) => void;
}

export default function OTPLoginModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: OTPLoginModalProps) {
  const [step, setStep] = useState<"login" | "otp">("login");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && isOpen) {
      try {
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible",
              callback: () => {},
            },
            auth
          );
          window.recaptchaVerifier.render();
        }
      } catch (err) {
        console.error("Recaptcha initialization error:", err);
      }
    }
  }, [isOpen]);

  const handleSendOTP = async () => {
    if (phone.trim().length !== 10 || name.trim().length === 0) {
      setError("Please enter a valid name and 10-digit phone number.");
      return;
    }
    const fullPhone = `+91${phone}`;
    try {
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
      setConfirmationResult(confirmation);
      setStep("otp");
      setError("");
    } catch (err) {
      console.error("OTP send failed:", err);
      setError("Failed to send OTP.");
    }
  };

  const handleVerify = async () => {
    try {
      const result = await confirmationResult.confirm(otp);
      const phoneNumber = result.user.phoneNumber;
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        phone: phoneNumber,
        name: name,
      });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      onLoginSuccess(user);
      setStep("login");
      setPhone("");
      setName("");
      setOtp("");
      setError("");
      onClose();
    } catch (err) {
      console.error("OTP verification failed:", err);
      setError("Invalid OTP. Try again.");
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

        {step === "login" && (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Enter your name & phone number
            </h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
              We’ll send you a text with a verification code.
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border rounded-lg px-3 py-2 mb-3 outline-none text-sm"
            />
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
              onClick={handleSendOTP}
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Continue
            </button>
            
            <p className="text-xs text-gray-400 mt-4 text-center">
              By continuing, you agree to our <span className="underline">T&C</span> and {" "}
              <span className="underline">Privacy Policy</span>.
            </p>
          </>
        )}

        {step === "otp" && (
          <>
            <div className="flex flex-col items-center justify-center mb-4">
              <HiShieldCheck className="text-purple-600 text-4xl mb-2" />
              <h2 className="text-xl font-semibold text-gray-800 text-center">
                Enter Verification Code
              </h2>
              <p className="text-sm text-gray-600 text-center">
                A 6-digit code was sent to {" "}
                <span className="font-medium text-gray-700">+91 {phone}</span>
              </p>
            </div>
            <input
              type="text"
              placeholder="Enter OTP"
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