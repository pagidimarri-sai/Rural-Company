import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

// ✅ Use public path for assets
const logo = "/assets/urban-logo.png";
const playstore = "/assets/google-play-badge.png";
const appstore = "/assets/app-store-badge.png";

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] pt-12 pb-6 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Logo at top */}
        <img
          src={logo}
          alt="Urban Company Logo"
          className="h-auto w-[180px] mb-2"
        />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start mt-2">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Company</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>About us</li>
              <li>Investor Relations</li>
              <li>Terms & conditions</li>
              <li>Privacy policy</li>
              <li>Anti-discrimination policy</li>
              <li>ESG Impact</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Customers</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>UC reviews</li>
              <li>Categories near you</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Professionals</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Register as a professional</li>
            </ul>
          </div>

          {/* Social + App Store */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
            </div>

            <h3 className="font-semibold text-lg mb-4">Get the App</h3>
            <div className="flex flex-col space-y-3">
              <img src={playstore} alt="Google Play" className="h-10 w-auto cursor-pointer" />
              <img src={appstore} alt="App Store" className="h-10 w-auto cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 text-center text-xs text-gray-500 px-4">
          <p className="mb-2">* As on December 31, 2024</p>
          <p>
            © 2025 Rural Company Ltd. (formerly RuralLLC Technologies India Limited) <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
