// // // File: src/components/Header.tsx
// // import { useEffect, useState } from "react";
// // import { Link, useLocation, useNavigate } from "react-router-dom";
// // import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
// // import OTPLoginModal from "./OTPLoginModal";
// // import LocationModal from "./LocationModal";
// // import { useCart } from "../contexts/CartContext";

// // const logo = "/assets/urban-logo.png";

// // export default function Header() {
// //   const [typedText, setTypedText] = useState("");
// //   const [wordIndex, setWordIndex] = useState(0);
// //   const [charIndex, setCharIndex] = useState(0);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
// //   const [user, setUser] = useState<any>(null);
// //   const [showDropdown, setShowDropdown] = useState(false);
// //   const [locationText, setLocationText] = useState("Hyderabad, Telangana");
// //   const [showCartPreview, setShowCartPreview] = useState(false);

// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const currentPath = location.pathname;

// //   const { cartItems, cartTotal } = useCart();

// //   const keywords = ["facial", "kitchen cleaning", "AC repair"];

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) setUser(JSON.parse(storedUser));
// //   }, []);

// //   useEffect(() => {
// //     const currentWord = keywords[wordIndex];
// //     const timeout = setTimeout(() => {
// //       if (charIndex < currentWord.length) {
// //         setTypedText((prev) => prev + currentWord[charIndex]);
// //         setCharIndex((prev) => prev + 1);
// //       } else {
// //         setTimeout(() => {
// //           setTypedText("");
// //           setCharIndex(0);
// //           setWordIndex((prev) => (prev + 1) % keywords.length);
// //         }, 2000);
// //       }
// //     }, 100);
// //     return () => clearTimeout(timeout);
// //   }, [charIndex, wordIndex]);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("token");
// //     setUser(null);
// //     setShowDropdown(false);
// //   };

// //   const navItems = [
// //     { name: "Beauty", path: "/beauty" },
// //     { name: "Home", path: "/home" },
// //     { name: "Native", path: "/native" },
// //   ];

// //   return (
// //     <>
// //       <header className="bg-white shadow py-3 sticky top-0 z-50">
// //         <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center gap-4">
// //           <div className="flex items-center gap-4 min-w-max mr-4">
// //             <img
// //               src={logo}
// //               alt="Rural Company"
// //               className="w-16 h-auto cursor-pointer"
// //               onClick={() => navigate("/")}
// //             />
// //             <nav className="flex gap-4 ml-2">
// //               {navItems.map(({ name, path }) => {
// //                 const isActive = currentPath.startsWith(path);
// //                 return (
// //                   <Link
// //                     key={path}
// //                     to={path}
// //                     className={`relative text-sm px-2 py-1 font-medium transition-all duration-200 ${
// //                       isActive
// //                         ? "text-purple-600 font-semibold after:scale-x-100"
// //                         : "text-gray-700 hover:text-purple-600"
// //                     } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
// //                   >
// //                     {name}
// //                   </Link>
// //                 );
// //               })}
// //             </nav>
// //           </div>

// //           <div className="flex items-center gap-3 flex-grow max-w-[500px]">
// //             <div
// //               onClick={() => setIsLocationModalOpen(true)}
// //               className="border rounded px-3 py-1 text-sm w-[220px] cursor-pointer hover:ring-2 hover:ring-purple-300 truncate"
// //               title="Click to change location"
// //             >
// //               📍 {locationText}
// //             </div>

// //             <div className="relative flex-grow">
// //               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //               <input
// //                 type="text"
// //                 placeholder={`Search for ${typedText}`}
// //                 className="pl-10 w-full border rounded px-3 py-1 text-sm focus:ring-2 focus:ring-purple-300"
// //               />
// //             </div>
// //           </div>

// //           <div className="flex items-center gap-4 min-w-max -translate-x-4">
// //             <div
// //               className="relative cursor-pointer"
// //               onClick={() => setShowCartPreview(!showCartPreview)}
// //             >
// //               <FaShoppingCart className="text-lg hover:text-purple-600" title="Cart" />
// //               {cartItems.length > 0 && (
// //                 <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1.5 py-0.5">
// //                   {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
// //                 </span>
// //               )}
// //               {showCartPreview && cartItems.length > 0 && (
// //                 <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-[999]">
// //                   <h3 className="text-sm font-semibold text-gray-800 mb-2">Cart Items</h3>
// //                   <ul className="max-h-60 overflow-y-auto">
// //                     {cartItems.map((item, index) => (
// //                       <li key={index} className="flex justify-between items-center mb-2 text-sm">
// //                         <span>{item.title}</span>
// //                         <span className="text-gray-600">×{item.quantity}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                   <div className="mt-2 text-right text-sm font-semibold text-purple-700">
// //                     Total: ₹{cartTotal.toFixed(2)}
// //                   </div>
// //                   <button
// //                     onClick={() => navigate("/cart")}
// //                     className="mt-3 w-full bg-purple-600 text-white py-1 rounded hover:bg-purple-700 text-sm"
// //                   >
// //                     Go to Cart
// //                   </button>
// //                 </div>
// //               )}
// //             </div>

// //             <div className="relative">
// //               <FaUser
// //                 onClick={() => setShowDropdown(!showDropdown)}
// //                 className="text-lg cursor-pointer hover:text-purple-600"
// //                 title="Login"
// //               />
// //               {showDropdown && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-[999]">
// //                   {!user ? (
// //                     <button
// //                       onClick={() => {
// //                         setIsModalOpen(true);
// //                         setShowDropdown(false);
// //                       }}
// //                       className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
// //                     >
// //                       Login
// //                     </button>
// //                   ) : (
// //                     <>
// //                       <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
// //                         My Bookings
// //                       </button>
// //                       <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
// //                         Help Center
// //                       </button>
// //                       <button
// //                         onClick={handleLogout}
// //                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
// //                       >
// //                         Logout
// //                       </button>
// //                     </>
// //                   )}
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       <OTPLoginModal
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //         onLoginSuccess={(userData) => {
// //           setUser(userData);
// //           setIsModalOpen(false);
// //         }}
// //       />

// //       <LocationModal
// //         isOpen={isLocationModalOpen}
// //         onClose={() => setIsLocationModalOpen(false)}
// //         onLocationSelect={(loc) => {
// //           setLocationText(loc);
// //         }}
// //       />
// //     </>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
// import OTPLoginModal from "./OTPLoginModal";
// import LocationModal from "./LocationModal";
// import { useCart } from "../contexts/CartContext";
// import clsx from "clsx";

// const logo = "/assets/urban-logo.png";

// export default function Header() {
//   const [typedText, setTypedText] = useState("");
//   const [wordIndex, setWordIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
//   const [user, setUser] = useState<any>(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [locationText, setLocationText] = useState("Hyderabad, Telangana");
//   const [showCartPreview, setShowCartPreview] = useState(false);
//   const [bounce, setBounce] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const currentPath = location.pathname;

//   const { cartItems } = useCart();

//   const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   useEffect(() => {
//     const currentWord = ["facial", "kitchen cleaning", "AC repair"][wordIndex];
//     const timeout = setTimeout(() => {
//       if (charIndex < currentWord.length) {
//         setTypedText((prev) => prev + currentWord[charIndex]);
//         setCharIndex((prev) => prev + 1);
//       } else {
//         setTimeout(() => {
//           setTypedText("");
//           setCharIndex(0);
//           setWordIndex((prev) => (prev + 1) % 3);
//         }, 2000);
//       }
//     }, 100);
//     return () => clearTimeout(timeout);
//   }, [charIndex, wordIndex]);

//   useEffect(() => {
//     // Trigger bounce animation
//     if (totalQty > 0) {
//       setBounce(true);
//       const timeout = setTimeout(() => setBounce(false), 500);
//       return () => clearTimeout(timeout);
//     }
//   }, [totalQty]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//     setShowDropdown(false);
//   };

//   const navItems = [
//     { name: "Beauty", path: "/beauty" },
//     { name: "Home", path: "/home" },
//     { name: "Native", path: "/native" },
//   ];

//   return (
//     <>
//       <header className="bg-white shadow py-3 sticky top-0 z-50">
//         <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center gap-4">
//           {/* Logo + Nav */}
//           <div className="flex items-center gap-4 min-w-max mr-4">
//             <img
//               src={logo}
//               alt="Rural Company"
//               className="w-16 h-auto cursor-pointer"
//               onClick={() => navigate("/")}
//             />
//             <nav className="flex gap-4 ml-2">
//               {navItems.map(({ name, path }) => {
//                 const isActive = currentPath.startsWith(path);
//                 return (
//                   <Link
//                     key={path}
//                     to={path}
//                     className={`relative text-sm px-2 py-1 font-medium transition-all duration-200 ${
//                       isActive
//                         ? "text-purple-600 font-semibold after:scale-x-100"
//                         : "text-gray-700 hover:text-purple-600"
//                     } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
//                   >
//                     {name}
//                   </Link>
//                 );
//               })}
//             </nav>
//           </div>

//           {/* Location + Search */}
//           <div className="flex items-center gap-3 flex-grow max-w-[500px]">
//             <div
//               onClick={() => setIsLocationModalOpen(true)}
//               className="border rounded px-3 py-1 text-sm w-[220px] cursor-pointer hover:ring-2 hover:ring-purple-300 truncate"
//               title="Click to change location"
//             >
//               📍 {locationText}
//             </div>
//             <div className="relative flex-grow">
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder={`Search for ${typedText}`}
//                 className="pl-10 w-full border rounded px-3 py-1 text-sm focus:ring-2 focus:ring-purple-300"
//               />
//             </div>
//           </div>

//           {/* Cart + Login */}
//           <div className="flex items-center gap-4 min-w-max -translate-x-4">
//             <div
//               className="relative cursor-pointer"
//               onClick={() => setShowCartPreview(!showCartPreview)}
//             >
//               <FaShoppingCart
//                 className={clsx(
//                   "text-lg hover:text-purple-600 transition-transform duration-300",
//                   bounce && "animate-bounce"
//                 )}
//                 title="Cart"
//               />
//               {totalQty > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1.5 py-0.5">
//                   {totalQty}
//                 </span>
//               )}
//               {showCartPreview && cartItems.length > 0 && (
//                 <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-[999]">
//                   <h3 className="text-sm font-semibold text-gray-800 mb-2">Cart Items</h3>
//                   <ul className="max-h-60 overflow-y-auto">
//                     {cartItems.map((item, index) => (
//                       <li key={index} className="flex justify-between items-center mb-2 text-sm">
//                         <span>{item.title}</span>
//                         <span className="text-gray-600">×{item.quantity}</span>
//                       </li>
//                     ))}
//                   </ul>
//                   <button
//                     onClick={() => navigate("/cart")}
//                     className="mt-3 w-full bg-purple-600 text-white py-1 rounded hover:bg-purple-700 text-sm"
//                   >
//                     Go to Cart
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="relative">
//               <FaUser
//                 onClick={() => setShowDropdown(!showDropdown)}
//                 className="text-lg cursor-pointer hover:text-purple-600"
//                 title="Login"
//               />
//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-[999]">
//                   {!user ? (
//                     <button
//                       onClick={() => {
//                         setIsModalOpen(true);
//                         setShowDropdown(false);
//                       }}
//                       className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
//                     >
//                       Login
//                     </button>
//                   ) : (
//                     <>
//                       <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
//                         My Bookings
//                       </button>
//                       <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
//                         Help Center
//                       </button>
//                       <button
//                         onClick={handleLogout}
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
//                       >
//                         Logout
//                       </button>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       <OTPLoginModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onLoginSuccess={(userData) => {
//           setUser(userData);
//           setIsModalOpen(false);
//         }}
//       />

//       <LocationModal
//         isOpen={isLocationModalOpen}
//         onClose={() => setIsLocationModalOpen(false)}
//         onLocationSelect={(loc) => {
//           setLocationText(loc);
//         }}
//       />
//     </>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import OTPLoginModal from "./OTPLoginModal";
import LocationModal from "./LocationModal";
import { useCart } from "../contexts/CartContext";
import clsx from "clsx";

const logo = "/assets/urban-logo.png";

// Define your search suggestions globally
const trendingSearches = [
  "Salon for Women",
  "AC Repair",
  "Full Home Cleaning",
  "Geyser Work",
  "Wall Panels",
  "Painting & Waterproofing",
  "Laptop",
  "TV",
];

const globalSearchItems = [
  { name: "Salon for Women", icon: "https://cdn-icons-png.flaticon.com/512/3105/3105928.png", path: "/beauty" },
  { name: "Spa for Women", icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", path: "/beauty" },
  { name: "Hair Studio", icon: "https://cdn-icons-png.flaticon.com/512/912/912214.png", path: "/beauty" },
  { name: "AC Repair", icon: "https://cdn-icons-png.flaticon.com/512/2933/2933916.png", path: "/home" },
  { name: "Full Home Cleaning", icon: "https://cdn-icons-png.flaticon.com/512/1585/1585235.png", path: "/home" },
  { name: "Geyser Work", icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png", path: "/home" },
  { name: "Wall Panels", icon: "https://cdn-icons-png.flaticon.com/512/2281/2281138.png", path: "/home" },
  { name: "Painting & Waterproofing", icon: "https://cdn-icons-png.flaticon.com/512/809/809957.png", path: "/home" },
  { name: "Laptop", icon: "https://cdn-icons-png.flaticon.com/512/841/841364.png", path: "/home" },
  { name: "TV", icon: "https://cdn-icons-png.flaticon.com/512/2920/2920296.png", path: "/home" },
];

export default function Header() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [locationText, setLocationText] = useState("Hyderabad, Telangana");
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<typeof globalSearchItems>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart();

  const currentPath = location.pathname;
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Typing effect
  useEffect(() => {
    const words = ["facial", "kitchen cleaning", "AC repair"];
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (charIndex < currentWord.length) {
        setTypedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setTypedText("");
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    if (totalQty > 0) {
      setBounce(true);
      const timeout = setTimeout(() => setBounce(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [totalQty]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setShowDropdown(false);
  };

  const navItems = [
    { name: "Beauty", path: "/beauty" },
    { name: "Home", path: "/home" },
    { name: "Native", path: "/native" },
  ];

  return (
    <>
      <header className="bg-white shadow py-3 sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-6 flex justify-between items-center gap-4">
          {/* Logo + Nav */}
          <div className="flex items-center gap-4 min-w-max mr-4">
            <img
              src={logo}
              alt="Rural Company"
              className="w-16 h-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
            <nav className="flex gap-4 ml-2">
              {navItems.map(({ name, path }) => {
                const isActive = currentPath.startsWith(path);
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`relative text-sm px-2 py-1 font-medium transition-all duration-200 ${
                      isActive
                        ? "text-purple-600 font-semibold after:scale-x-100"
                        : "text-gray-700 hover:text-purple-600"
                    } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Location + Search */}
          <div className="flex items-center gap-3 flex-grow max-w-[500px]">
            <div
              onClick={() => setIsLocationModalOpen(true)}
              className="border rounded px-3 py-1 text-sm w-[220px] cursor-pointer hover:ring-2 hover:ring-purple-300 truncate"
              title="Click to change location"
            >
              📍 {locationText}
            </div>

            {/* Global Search */}
            <div className="relative flex-grow" ref={searchRef}>
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Search for ${typedText}`}
                value={searchText}
                onFocus={() => {
                  const initial = trendingSearches
                    .map((t) => globalSearchItems.find((g) => g.name === t))
                    .filter(Boolean) as typeof globalSearchItems;
                  setSuggestions(initial);
                  setShowSuggestions(true);
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchText(value);
                  const filtered = globalSearchItems.filter((item) =>
                    item.name.toLowerCase().includes(value.toLowerCase())
                  );
                  setSuggestions(filtered);
                  setShowSuggestions(true);
                }}
                className="pl-10 w-full border rounded px-3 py-1 text-sm focus:ring-2 focus:ring-purple-300"
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute top-full left-0 w-full bg-white border mt-2 rounded shadow-lg z-50 max-h-64 overflow-y-auto">
                  {suggestions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate(item.path);
                        setShowSuggestions(false);
                        setSearchText("");
                      }}
                    >
                      <img src={item.icon} alt={item.name} className="w-5 h-5" />
                      <span className="text-sm text-gray-800">{item.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Cart + User */}
          <div className="flex items-center gap-4 min-w-max -translate-x-4">
            <div
              className="relative cursor-pointer"
              onClick={() => setShowCartPreview(!showCartPreview)}
            >
              <FaShoppingCart
                className={clsx(
                  "text-lg hover:text-purple-600 transition-transform duration-300",
                  bounce && "animate-bounce"
                )}
                title="Cart"
              />
              {totalQty > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full px-1.5 py-0.5">
                  {totalQty}
                </span>
              )}
              {showCartPreview && cartItems.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-[999]">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Cart Items</h3>
                  <ul className="max-h-60 overflow-y-auto">
                    {cartItems.map((item, index) => (
                      <li key={index} className="flex justify-between items-center mb-2 text-sm">
                        <span>{item.title}</span>
                        <span className="text-gray-600">×{item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate("/cart")}
                    className="mt-3 w-full bg-purple-600 text-white py-1 rounded hover:bg-purple-700 text-sm"
                  >
                    Go to Cart
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <FaUser
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-lg cursor-pointer hover:text-purple-600"
                title="Login"
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-[999]">
                  {!user ? (
                    <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setShowDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      Login
                    </button>
                  ) : (
                    <>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                        My Bookings
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                        Help Center
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <OTPLoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={(userData) => {
          setUser(userData);
          setIsModalOpen(false);
        }}
      />

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onLocationSelect={(loc) => {
          setLocationText(loc);
        }}
      />
    </>
  );
}
