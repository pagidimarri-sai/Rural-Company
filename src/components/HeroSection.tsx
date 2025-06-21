import {
  FaStar,
  FaUserAlt,
  FaMale,
  FaTools,
  FaBroom,
  FaBug,
  FaBolt,
  FaLock,
  FaPaintRoller,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-[1280px] w-full px-6 mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
            Home services
            <br />
            at your doorstep
          </h2>

          {/* Search Box */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-5 py-3 rounded-lg shadow bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          {/* Grid: 6 items in 2 rows × 3 columns */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer">
              <div className="text-purple-600 text-2xl mb-2">
                <FaUserAlt />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">Women’s Salon</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer">
              <div className="text-purple-600 text-2xl mb-2">
                <FaMale />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">Men’s Salon</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer">
              <div className="text-purple-600 text-2xl mb-2">
                <FaTools />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">AC Repair</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer">
              <div className="text-purple-600 text-2xl mb-2">
                <FaBroom />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">Cleaning</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer">
              <div className="text-purple-600 text-2xl mb-2">
                <FaBug />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">Pest Control</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer">
              <div className="text-purple-600 text-2xl mb-2">
                <FaBolt />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">Electrician</p>
            </div>
          </div>

          {/* Third row: 2 wide items side by side */}
          <div className="flex gap-4 mb-6">
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer flex-1">
              <div className="text-purple-600 text-2xl mb-2">
                <FaLock />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">Smart Locks (Native)</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer flex-1">
              <div className="text-purple-600 text-2xl mb-2">
                <FaPaintRoller />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">Painting & Waterproofing</p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10 flex-wrap justify-center">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-3xl font-bold text-gray-800">4.8</h3>
                <FaStar className="text-yellow-500 text-xl mt-1" />
              </div>
              <p className="text-sm text-gray-500">Service Rating*</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">12M+</h3>
              <p className="text-sm text-gray-500">Customers Globally*</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[600px] w-full max-w-md">
            <img
              src="/assets/images.png"
              alt="Spa"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <img
              src="/assets/images (1).jpeg"
              alt="Salon"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <img
              src="/assets/pexels-richard-low-hong-33206323-7347538.jpg"
              alt="AC Repair"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <img
              src="/assets/pexels-ian-panelo-3230236.jpg"
              alt="Electrician"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
