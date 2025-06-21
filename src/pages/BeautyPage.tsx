// pages/BeautyPage.tsx
import { FaStar } from "react-icons/fa";

// Section Components
import AdBanner from "../components/AdBanner";
import BeautyFeatureSection from "../components/BeautyFeatureSection";
import SalonForWomenSection from "../components/SalonForWomenSection";
import SpaForWomenSection from "../components/SpaForWomenSection";
import MassageForMen from "../components/MassageForMen";
import SalonForMenSection from "../components/SalonForMenSection";
import Footer from "../components/Footer";

export default function BeautyPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔥 Hero / Top Section */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-[1280px] w-full px-6 mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* LEFT */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
              Beauty services at your <br />
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

            {/* Category Grid with Icons */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <Category
                icon="/assets/salonforwomenicon.webp"
                label="Salon For Women"
              />
              <Category
                icon="/assets/spaforwomenicon.webp"
                label="Spa For Women"
              />
              <Category
                icon="/assets/hairstudioforwomenicon.webp"
                label="Hair Studio"
              />
              <Category
                icon="/assets/paintingwatericon.webp"
                label="Makeup & Styling"
              />
              <Category
                icon="/assets/salonformenicon.webp"
                label="Salon For Men"
              />
              <Category
                icon="/assets/massageformenicon.webp"
                label="Massage For Men"
              />
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

          {/* RIGHT */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md h-[600px]">
              <img
                src="/assets/beautypage1icon.webp"
                alt="Beauty Services"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔽 Feature Carousel */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <BeautyFeatureSection />
        </div>
      </div>

      {/* 🔽 Other Sections */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mt-10">
            <SalonForWomenSection />
          </div>
          <div className="mt-10">
            <SpaForWomenSection />
          </div>
          <div className="mt-10">
            <AdBanner />
          </div>
          <div className="mt-10">
            <MassageForMen />
          </div>
          <div className="mt-10">
            <SalonForMenSection />
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

// 🔸 Category Card Component
function Category({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer">
      <img src={icon} alt={label} className="w-10 h-10 mb-2" />
      <p className="text-center text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
}
