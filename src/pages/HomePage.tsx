import { FaStar } from "react-icons/fa";

import AdBanner from "../components/AdBanner";
import Footer from "../components/Footer";
import HomeRepair from "../components/HomeRepair";

// 🔸 Category Card Component with Image
function Category({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer">
      <img src={icon} alt={label} className="w-10 h-10 mb-2" />
      <p className="text-center text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔥 Hero / Top Section */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-[1280px] w-full px-6 mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* LEFT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
              Home services at your <br />
              doorstep
            </h2>

            {/* Search Box */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-5 py-3 rounded-lg shadow bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>

            {/* Category Grid with Actual Icons */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <Category icon="/assets/acappliancerepairicon.webp" label="AC Repair" />
              <Category icon="/assets/telivisionicon.webp" label="TV Repair" />
              <Category icon="/assets/laptopicon.webp" label="Laptop Repair" />
              <Category icon="/assets/sofaandcarpeticon.webp" label="Sofa Cleaning" />
              <Category icon="/assets/fullhomeicon.webp" label="Full Home Cleaning" />
              <Category icon="/assets/bathroomclearningicon.webp" label="Bathroom Cleaning" />
              <Category icon="/assets/cockroach ant and generalpestcontrolicon.webp" label="Pest Control" />
              <Category icon="/assets/electricianplumbericon.webp" label="Electrician" />
              <Category icon="/assets/faninstallationicon.webp" label="Fan Installation" />
              <Category icon="/assets/furnitureassemblyicon.webp" label="Furniture Assembly" />
              <Category icon="/assets/paintingwatericon.webp" label="Painting" />
              <Category icon="/assets/plumbericon.webp" label="Plumber" />
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

          {/* RIGHT IMAGE – Replaced 4-grid with full image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md h-[600px]">
              <img
                src="/assets/home applicancespage.png"
                alt="Home Services"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔽 Ad Banner */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <AdBanner />
        </div>
      </div>

      {/* 🔽 Home Repair Section */}
      <div className="mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <HomeRepair />
        </div>
      </div>

      {/* 🔽 Footer */}
      <div className="mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
