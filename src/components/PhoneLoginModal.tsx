// // import { useState } from "react";
// // import { createPortal } from "react-dom";
// // import { HiShieldCheck } from "react-icons/hi";
// // import { IoMdClose } from "react-icons/io";

// // export default function PhoneLoginModal({
// //   isOpen,
// //   onClose,
// // }: {
// //   isOpen: boolean;
// //   onClose: () => void;
// // }) {
// //   const [step, setStep] = useState<"login" | "otp">("login");
// //   const [phone, setPhone] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [error, setError] = useState("");

// //   const handleContinue = () => {
// //     if (phone.trim().length === 10) {
// //       setStep("otp");
// //       setError("");
// //     } else {
// //       setError("Please enter a valid 10-digit phone number.");
// //     }
// //   };

// //   const handleVerify = () => {
// //     if (otp === "123456") {
// //       alert("✅ OTP Verified! You are logged in.");
// //       onClose();
// //       setStep("login");
// //       setPhone("");
// //       setOtp("");
// //     } else {
// //       setError("Invalid OTP. Try 123456 for testing.");
// //     }
// //   };

// //   if (!isOpen) return null;

// //   return createPortal(
// //     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
// //       <div className="bg-white w-full max-w-sm mx-4 p-6 rounded-xl shadow-lg relative">
// //         {/* Close Button */}
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
// //         >
// //           <IoMdClose size={22} />
// //         </button>

// //         {/* Logo */}
// //         <div className="flex justify-center mb-4">
// //           <img src="/assets/urban-logo.png" alt="Rural Company" className="h-12" />
// //         </div>

// //         {/* Step 1: Enter Phone */}
// //         {step === "login" && (
// //           <>
// //             <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
// //               Enter your phone number
// //             </h2>
// //             <p className="text-sm text-gray-600 mb-4 text-center">
// //               We’ll send you a text with a verification code.
// //             </p>
// //             <div className="flex items-center border rounded-lg px-3 py-2 mb-3">
// //               <span className="text-gray-700 mr-2">+91</span>
// //               <input
// //                 type="tel"
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value)}
// //                 placeholder="Enter your phone number"
// //                 className="flex-1 outline-none text-sm"
// //               />
// //             </div>
// //             {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
// //             <button
// //               onClick={handleContinue}
// //               className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
// //             >
// //               Continue
// //             </button>
// //             <p className="text-xs text-gray-400 mt-4 text-center">
// //               By continuing, you agree to our <span className="underline">T&C</span> and{" "}
// //               <span className="underline">Privacy Policy</span>.
// //             </p>
// //           </>
// //         )}

// //         {/* Step 2: OTP Verification */}
// //         {step === "otp" && (
// //           <>
// //             <div className="flex flex-col items-center justify-center mb-4">
// //               <HiShieldCheck className="text-purple-600 text-4xl mb-2" />
// //               <h2 className="text-xl font-semibold text-gray-800 text-center">
// //                 Enter Verification Code
// //               </h2>
// //               <p className="text-sm text-gray-600 text-center">
// //                 A 6-digit verification code has been sent to{" "}
// //                 <span className="font-medium text-gray-700">+91 {phone}</span>
// //               </p>
// //             </div>

// //             <input
// //               type="text"
// //               placeholder="Enter OTP (try 123456)"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value)}
// //               className="w-full border rounded-lg px-3 py-2 mb-3 outline-none text-sm"
// //             />
// //             {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
// //             <button
// //               onClick={handleVerify}
// //               className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
// //             >
// //               Verify OTP
// //             </button>
// //           </>
// //         )}
// //       </div>
// //     </div>,
// //     document.body
// //   );
// // }

// // PhoneLoginModal.tsx (with Firebase + TypeScript + backend call)
// // import { useState, useEffect } from "react";
// // import { createPortal } from "react-dom";
// // import { HiShieldCheck } from "react-icons/hi";
// // import { IoMdClose } from "react-icons/io";
// // import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// // import { auth } from "../firebase";
// // import axios from "axios";


// // interface PhoneLoginModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   onLoginSuccess: (user: any) => void;
// // }

// // export default function PhoneLoginModal({ isOpen, onClose, onLoginSuccess }: PhoneLoginModalProps) {
// //   const [step, setStep] = useState<"login" | "otp">("login");
// //   const [phone, setPhone] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [error, setError] = useState("");
// //   const [confirmationResult, setConfirmationResult] = useState<any>(null);

// //   useEffect(() => {
// //     if (!window.recaptchaVerifier) {
// //       window.recaptchaVerifier = new RecaptchaVerifier(
// //         "recaptcha-container",
// //         {
// //           size: "invisible",
// //           callback: () => handleSendOTP(),
// //         },
// //         auth
// //       );
// //     }
// //   }, []);

// //   const handleSendOTP = async () => {
// //     if (phone.trim().length !== 10) {
// //       setError("Please enter a valid 10-digit phone number.");
// //       return;
// //     }
// //     const fullPhone = `+91${phone}`;
// //     try {
// //       const appVerifier = window.recaptchaVerifier;
// //       const confirmation = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
// //       setConfirmationResult(confirmation);
// //       setStep("otp");
// //       setError("");
// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to send OTP.");
// //     }
// //   };

// //   const handleVerify = async () => {
// //     try {
// //       const result = await confirmationResult.confirm(otp);
// //       const phoneNumber = result.user.phoneNumber;

// //       const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
// //         phone: phoneNumber,
// //       });

// //       const { token, user } = res.data;
// //       localStorage.setItem("token", token);
// //       localStorage.setItem("user", JSON.stringify(user));

// //       onLoginSuccess(user);
// //       onClose();
// //       setStep("login");
// //       setPhone("");
// //       setOtp("");
// //     } catch (err) {
// //       console.error(err);
// //       setError("Invalid OTP. Try again.");
// //     }
// //   };

// //   if (!isOpen) return null;

// //   return createPortal(
// //     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
// //       <div className="bg-white w-full max-w-sm mx-4 p-6 rounded-xl shadow-lg relative">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
// //         >
// //           <IoMdClose size={22} />
// //         </button>

// //         <div className="flex justify-center mb-4">
// //           <img src="/assets/urban-logo.png" alt="Rural Company" className="h-12" />
// //         </div>

// //         {step === "login" && (
// //           <>
// //             <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
// //               Enter your phone number
// //             </h2>
// //             <p className="text-sm text-gray-600 mb-4 text-center">
// //               We’ll send you a text with a verification code.
// //             </p>
// //             <div className="flex items-center border rounded-lg px-3 py-2 mb-3">
// //               <span className="text-gray-700 mr-2">+91</span>
// //               <input
// //                 type="tel"
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value)}
// //                 placeholder="Enter your phone number"
// //                 className="flex-1 outline-none text-sm"
// //               />
// //             </div>
// //             {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
// //             <button
// //               onClick={handleSendOTP}
// //               className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
// //             >
// //               Continue
// //             </button>
// //             <div id="recaptcha-container"></div>
// //             <p className="text-xs text-gray-400 mt-4 text-center">
// //               By continuing, you agree to our <span className="underline">T&C</span> and <span className="underline">Privacy Policy</span>.
// //             </p>
// //           </>
// //         )}

// //         {step === "otp" && (
// //           <>
// //             <div className="flex flex-col items-center justify-center mb-4">
// //               <HiShieldCheck className="text-purple-600 text-4xl mb-2" />
// //               <h2 className="text-xl font-semibold text-gray-800 text-center">
// //                 Enter Verification Code
// //               </h2>
// //               <p className="text-sm text-gray-600 text-center">
// //                 A 6-digit verification code has been sent to <span className="font-medium text-gray-700">+91 {phone}</span>
// //               </p>
// //             </div>

// //             <input
// //               type="text"
// //               placeholder="Enter OTP"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value)}
// //               className="w-full border rounded-lg px-3 py-2 mb-3 outline-none text-sm"
// //             />
// //             {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
// //             <button
// //               onClick={handleVerify}
// //               className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
// //             >
// //               Verify OTP
// //             </button>
// //           </>
// //         )}
// //       </div>
// //     </div>,
// //     document.body
// //   );
// // }

// // import { useState, useEffect } from "react";
// // import { createPortal } from "react-dom";
// // import { HiShieldCheck } from "react-icons/hi";
// // import { IoMdClose } from "react-icons/io";
// // import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// // import { auth } from "../firebase";
// // import axios from "axios";

// // interface PhoneLoginModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   onLoginSuccess: (user: any) => void;
// // }

// // export default function PhoneLoginModal({ isOpen, onClose, onLoginSuccess }: PhoneLoginModalProps) {
// //   const [step, setStep] = useState<"login" | "otp">("login");
// //   const [phone, setPhone] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [error, setError] = useState("");
// //   const [confirmationResult, setConfirmationResult] = useState<any>(null);

// //   useEffect(() => {
// //     const setupRecaptcha = () => {
// //       if (typeof window !== "undefined" && !window.recaptchaVerifier && document.getElementById("recaptcha-container")) {
// //         try {
// //           window.recaptchaVerifier = new RecaptchaVerifier(
// //             "recaptcha-container",
// //             {
// //               size: "invisible",
// //               callback: (response: any) => {
// //                 console.log("reCAPTCHA solved", response);
// //               },
// //             },
// //             auth
// //           );
// //           window.recaptchaVerifier.render();
// //         } catch (err) {
// //           console.error("reCAPTCHA init error:", err);
// //         }
// //       }
// //     };

// //     if (isOpen) {
// //       setTimeout(setupRecaptcha, 200);
// //     }
// //   }, [isOpen]);

// //   const handleSendOTP = async () => {
// //     if (phone.trim().length !== 10) {
// //       setError("Please enter a valid 10-digit phone number.");
// //       return;
// //     }
// //     const fullPhone = `+91${phone}`;
// //     try {
// //       const appVerifier = window.recaptchaVerifier;
// //       const confirmation = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
// //       setConfirmationResult(confirmation);
// //       setStep("otp");
// //       setError("");
// //     } catch (err) {
// //       console.error(err);
// //       setError("Failed to send OTP.");
// //     }
// //   };

// //   const handleVerify = async () => {
// //     try {
// //       const result = await confirmationResult.confirm(otp);
// //       const phoneNumber = result.user.phoneNumber;

// //       const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
// //         phone: phoneNumber,
// //       });

// //       const { token, user } = res.data;
// //       localStorage.setItem("token", token);
// //       localStorage.setItem("user", JSON.stringify(user));

// //       onLoginSuccess(user);
// //       onClose();
// //       setStep("login");
// //       setPhone("");
// //       setOtp("");
// //     } catch (err) {
// //       console.error(err);
// //       setError("Invalid OTP. Try again.");
// //     }
// //   };

// //   if (!isOpen) return null;

// //   return createPortal(
// //     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
// //       <div className="bg-white w-full max-w-sm mx-4 p-6 rounded-xl shadow-lg relative">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
// //         >
// //           <IoMdClose size={22} />
// //         </button>

// //         <div className="flex justify-center mb-4">
// //           <img src="/assets/urban-logo.png" alt="Rural Company" className="h-12" />
// //         </div>

// //         {step === "login" && (
// //           <>
// //             <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
// //               Enter your phone number
// //             </h2>
// //             <p className="text-sm text-gray-600 mb-4 text-center">
// //               We’ll send you a text with a verification code.
// //             </p>
// //             <div className="flex items-center border rounded-lg px-3 py-2 mb-3">
// //               <span className="text-gray-700 mr-2">+91</span>
// //               <input
// //                 type="tel"
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value)}
// //                 placeholder="Enter your phone number"
// //                 className="flex-1 outline-none text-sm"
// //               />
// //             </div>
// //             {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
// //             <button
// //               onClick={handleSendOTP}
// //               className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
// //             >
// //               Continue
// //             </button>
// //             <p className="text-xs text-gray-400 mt-4 text-center">
// //               By continuing, you agree to our <span className="underline">T&C</span> and <span className="underline">Privacy Policy</span>.
// //             </p>
// //           </>
// //         )}

// //         {step === "otp" && (
// //           <>
// //             <div className="flex flex-col items-center justify-center mb-4">
// //               <HiShieldCheck className="text-purple-600 text-4xl mb-2" />
// //               <h2 className="text-xl font-semibold text-gray-800 text-center">
// //                 Enter Verification Code
// //               </h2>
// //               <p className="text-sm text-gray-600 text-center">
// //                 A 6-digit verification code has been sent to <span className="font-medium text-gray-700">+91 {phone}</span>
// //               </p>
// //             </div>

// //             <input
// //               type="text"
// //               placeholder="Enter OTP"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value)}
// //               className="w-full border rounded-lg px-3 py-2 mb-3 outline-none text-sm"
// //             />
// //             {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
// //             <button
// //               onClick={handleVerify}
// //               className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
// //             >
// //               Verify OTP
// //             </button>
// //           </>
// //         )}

// //         {/* ✅ Keep this always rendered */}
// //         <div id="recaptcha-container"></div>
// //       </div>
// //     </div>,
// //     document.body
// //   );
// // }

// import { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { HiShieldCheck } from "react-icons/hi";
// import { IoMdClose } from "react-icons/io";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "../firebase";
// import axios from "axios";

// interface PhoneLoginModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onLoginSuccess: (user: any) => void;
// }

// export default function PhoneLoginModal({
//   isOpen,
//   onClose,
//   onLoginSuccess,
// }: PhoneLoginModalProps) {
//   const [step, setStep] = useState<"login" | "otp">("login");
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState<any>(null);

//   // Setup reCAPTCHA only once when modal opens
//   useEffect(() => {
//     if (!isOpen) return;

//     if (!window.recaptchaVerifier && document.getElementById("recaptcha-container")) {
//       try {
//         window.recaptchaVerifier = new RecaptchaVerifier(
//           "recaptcha-container",
//           {
//             size: "invisible",
//             callback: () => {},
//           },
//           auth
//         );
//         window.recaptchaVerifier.render();
//       } catch (err) {
//         console.error("reCAPTCHA init error:", err);
//       }
//     }
//   }, [isOpen]);

//   const handleSendOTP = async () => {
//     setError("");
//     if (phone.trim().length !== 10) {
//       setError("Please enter a valid 10-digit phone number.");
//       return;
//     }

//     try {
//       const appVerifier = window.recaptchaVerifier;
//       const fullPhone = `+91${phone}`;
//       const confirmation = await signInWithPhoneNumber(auth, fullPhone, appVerifier);
//       setConfirmationResult(confirmation);
//       setStep("otp");
//     } catch (err) {
//       console.error("OTP send error:", err);
//       setError("Failed to send OTP. Please try again.");
//     }
//   };

//   const handleVerify = async () => {
//     setError("");
//     try {
//       const result = await confirmationResult.confirm(otp);
//       const phoneNumber = result.user.phoneNumber;

//       const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
//         phone: phoneNumber,
//       });

//       const { token, user } = res.data;
//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
//       onLoginSuccess(user);

//       // Reset state and close modal
//       setStep("login");
//       setPhone("");
//       setOtp("");
//       setError("");
//       onClose();
//     } catch (err) {
//       console.error("OTP verification failed:", err);
//       setError("Invalid OTP. Please try again.");
//     }
//   };

//   if (!isOpen) return null;

//   return createPortal(
//     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
//       <div className="bg-white w-full max-w-sm mx-4 p-6 rounded-xl shadow-lg relative">
//         <button
//           onClick={() => {
//             setStep("login");
//             setPhone("");
//             setOtp("");
//             setError("");
//             onClose();
//           }}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//         >
//           <IoMdClose size={22} />
//         </button>

//         <div className="flex justify-center mb-4">
//           <img src="/assets/urban-logo.png" alt="Rural Company" className="h-12" />
//         </div>

//         {step === "login" ? (
//           <>
//             <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
//               Enter your phone number
//             </h2>
//             <p className="text-sm text-gray-600 mb-4 text-center">
//               We’ll send you a text with a verification code.
//             </p>

//             <div className="flex items-center border rounded-lg px-3 py-2 mb-3">
//               <span className="text-gray-700 mr-2">+91</span>
//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter your phone number"
//                 className="flex-1 outline-none text-sm"
//               />
//             </div>

//             {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

//             <button
//               onClick={handleSendOTP}
//               className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
//             >
//               Continue
//             </button>

//             <p className="text-xs text-gray-400 mt-4 text-center">
//               By continuing, you agree to our <span className="underline">T&C</span> and <span className="underline">Privacy Policy</span>.
//             </p>
//           </>
//         ) : (
//           <>
//             <div className="flex flex-col items-center justify-center mb-4">
//               <HiShieldCheck className="text-purple-600 text-4xl mb-2" />
//               <h2 className="text-xl font-semibold text-gray-800 text-center">
//                 Enter Verification Code
//               </h2>
//               <p className="text-sm text-gray-600 text-center">
//                 A 6-digit verification code has been sent to <span className="font-medium text-gray-700">+91 {phone}</span>
//               </p>
//             </div>

//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-full border rounded-lg px-3 py-2 mb-3 outline-none text-sm"
//             />
//             {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

//             <button
//               onClick={handleVerify}
//               className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
//             >
//               Verify OTP
//             </button>
//           </>
//         )}

//         {/* ✅ Only 1 instance always present */}
//         <div id="recaptcha-container"></div>
//       </div>
//     </div>,
//     document.body
//   );
// }
