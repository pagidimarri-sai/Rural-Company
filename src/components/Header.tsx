import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import OTPLoginModal from "./OTPLoginModal";
import LocationModal from "./LocationModal";

const logo = "/assets/urban-logo.png";

export default function Header() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [locationText, setLocationText] = useState("Hyderabad, Telangana");

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const keywords = ["facial", "kitchen cleaning", "AC repair"];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

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
          {/* Left: Logo + Nav */}
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

          {/* Middle: Location & Search */}
          <div className="flex items-center gap-3 flex-grow max-w-[500px]">
            <div
              onClick={() => setIsLocationModalOpen(true)}
              className="border rounded px-3 py-1 text-sm w-[220px] cursor-pointer hover:ring-2 hover:ring-purple-300 truncate"
              title="Click to change location"
            >
              📍 {locationText}
            </div>

            <div className="relative flex-grow">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={`Search for ${typedText}`}
                className="pl-10 w-full border rounded px-3 py-1 text-sm focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </div>

          {/* Right: Cart + Login */}
          <div className="flex items-center gap-4 min-w-max -translate-x-4">
            <FaShoppingCart
              className="text-lg cursor-pointer hover:text-purple-600"
              title="Cart"
              onClick={() => navigate("/cart")}
            />
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

      {/* OTP Login Modal */}
      <OTPLoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={(userData) => {
          setUser(userData);
          setIsModalOpen(false);
        }}
      />

      {/* Location Modal */}
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
