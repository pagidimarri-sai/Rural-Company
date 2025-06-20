// // src/components/Header.tsx
// import { useEffect, useState } from "react";
// import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
// import PhoneLoginModal from "./PhoneLoginModal";


// export default function Header() {
//   const [typedText, setTypedText] = useState("");
//   const [wordIndex, setWordIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const keywords = ["facial", "kitchen cleaning", "AC repair"];

//   // Typing effect
//   useEffect(() => {
//     const currentWord = keywords[wordIndex];
//     const timeout = setTimeout(() => {
//       if (charIndex < currentWord.length) {
//         setTypedText((prev) => prev + currentWord[charIndex]);
//         setCharIndex((prev) => prev + 1);
//       } else {
//         setTimeout(() => {
//           setTypedText("");
//           setCharIndex(0);
//           setWordIndex((prev) => (prev + 1) % keywords.length);
//         }, 2000);
//       }
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, [charIndex, wordIndex]);

//   return (
//     <>
//       <header className="bg-white shadow py-5 sticky top-0 z-50">
//         <div className="max-w-[1280px] w-full px-6 mx-auto flex justify-between items-center">
          
//           {/* Left: Logo + Nav */}
//           <div className="flex items-center gap-4">
//             <h1 className="text-xl font-bold text-purple-600 cursor-pointer">
//               Rural Company
//             </h1>
//             <nav className="flex gap-8 ml-8">
//               <button className="text-sm hover:text-purple-600 font-medium">Beauty</button>
//               <button className="text-sm hover:text-purple-600 font-medium">Home</button>
//               <button className="text-sm hover:text-purple-600 font-medium">Native</button>
//             </nav>
//           </div>

//           {/* Middle: Location + Search */}
//           <div className="flex items-center gap-3 max-w-[600px] flex-grow mx-4">
//             <input
//               type="text"
//               placeholder="📍 Nungambakkam, Chennai"
//               className="border rounded px-2 py-1 text-sm flex-1 max-w-[180px] focus:ring-2 focus:ring-purple-300"
//             />
//             <div className="relative flex-1">
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder={`Search for ${typedText}`}
//                 className="pl-10 w-full border rounded px-3 py-1 text-sm focus:ring-2 focus:ring-purple-300"
//               />
//             </div>
//           </div>

//           {/* Right: Icons */}
//           <div className="flex items-center gap-4 text-gray-700">
//             <FaShoppingCart
//               className="text-lg cursor-pointer hover:text-purple-600"
//               title="Cart"
//             />
//             <FaUser
//               onClick={() => setIsModalOpen(true)}
//               className="text-lg cursor-pointer hover:text-purple-600"
//               title="Login"
//             />
//           </div>
//         </div>
//       </header>

//       {/* Login Popup */}
//       <PhoneLoginModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </>
//   );
// }

// import { useEffect, useState } from "react";
// import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
// import PhoneLoginModal from "./PhoneLoginModal";
// import logo from "../assets/urban-logo.png"; // ✅ Import the logo correctly

// export default function Header() {
//   const [typedText, setTypedText] = useState("");
//   const [wordIndex, setWordIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const keywords = ["facial", "kitchen cleaning", "AC repair"];

//   // Typing effect
//   useEffect(() => {
//     const currentWord = keywords[wordIndex];
//     const timeout = setTimeout(() => {
//       if (charIndex < currentWord.length) {
//         setTypedText((prev) => prev + currentWord[charIndex]);
//         setCharIndex((prev) => prev + 1);
//       } else {
//         setTimeout(() => {
//           setTypedText("");
//           setCharIndex(0);
//           setWordIndex((prev) => (prev + 1) % keywords.length);
//         }, 2000);
//       }
//     }, 100);

//     return () => clearTimeout(timeout);
//   }, [charIndex, wordIndex]);

//   return (
//     <>
//       <header className="bg-white shadow py-5 sticky top-0 z-50">
//         <div className="max-w-[1280px] w-full px-6 mx-auto flex justify-between items-center">
//           {/* Left: Logo + Nav */}
//           <div className="flex items-center gap-4">
//             {/* ✅ Logo image */}
//             <img
//               src={logo}
//               alt="Rural Company"
//               className="w-28 h-auto cursor-pointer"
//             />
//             <nav className="flex gap-8 ml-8">
//               <button className="text-sm hover:text-purple-600 font-medium">Beauty</button>
//               <button className="text-sm hover:text-purple-600 font-medium">Home</button>
//               <button className="text-sm hover:text-purple-600 font-medium">Native</button>
//             </nav>
//           </div>

//           {/* Middle: Location + Search */}
//           <div className="flex items-center gap-3 max-w-[600px] flex-grow mx-4">
//             <input
//               type="text"
//               placeholder="📍 Hyderabad, Telangana"
//               className="border rounded px-2 py-1 text-sm flex-1 max-w-[180px] focus:ring-2 focus:ring-purple-300"
//             />
//             <div className="relative flex-1">
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder={`Search for ${typedText}`}
//                 className="pl-10 w-full border rounded px-3 py-1 text-sm focus:ring-2 focus:ring-purple-300"
//               />
//             </div>
//           </div>

//           {/* Right: Icons */}
//           <div className="flex items-center gap-4 text-gray-700">
//             <FaShoppingCart
//               className="text-lg cursor-pointer hover:text-purple-600"
//               title="Cart"
//             />
//             <FaUser
//               onClick={() => setIsModalOpen(true)}
//               className="text-lg cursor-pointer hover:text-purple-600"
//               title="Login"
//             />
//           </div>
//         </div>
//       </header>

//       {/* Login Popup */}
//       <PhoneLoginModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import PhoneLoginModal from "./PhoneLoginModal";

// ✅ Use logo from public folder
const logo = "/assets/urban-logo.png";

export default function Header() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const keywords = ["facial", "kitchen cleaning", "AC repair"];

  // Typing animation for search box
  useEffect(() => {
    const currentWord = keywords[wordIndex];
    const timeout = setTimeout(() => {
      if (charIndex < currentWord.length) {
        setTypedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setTypedText("");
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % keywords.length);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  return (
    <>
      <header className="bg-white shadow py-3 sticky top-0 z-50">
        <div className="max-w-[1280px] w-full px-6 mx-auto flex justify-between items-center">
          {/* Left: Logo & Nav */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Rural Company"
              className="w-16 h-auto cursor-pointer"
            />
            <nav className="flex gap-6 ml-4">
              <button className="text-sm hover:text-purple-600 font-medium">Beauty</button>
              <button className="text-sm hover:text-purple-600 font-medium">Home</button>
              <button className="text-sm hover:text-purple-600 font-medium">Native</button>
            </nav>
          </div>

          {/* Middle: Location + Search */}
          <div className="flex items-center gap-3 flex-grow mx-4">
            <input
              type="text"
              placeholder="📍 Hyderabad, Telangana"
              className="border rounded px-2 py-1 text-sm max-w-[160px] focus:ring-2 focus:ring-purple-300"
            />
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Search for ${typedText}`}
                className="pl-10 w-full border rounded px-3 py-1 text-sm focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </div>

          {/* Right: Cart & Login */}
          <div className="flex items-center gap-4 text-gray-700">
            <FaShoppingCart
              className="text-lg cursor-pointer hover:text-purple-600"
              title="Cart"
            />
            <FaUser
              onClick={() => setIsModalOpen(true)}
              className="text-lg cursor-pointer hover:text-purple-600"
              title="Login"
            />
          </div>
        </div>
      </header>

      {/* Phone Login Modal */}
      <PhoneLoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

