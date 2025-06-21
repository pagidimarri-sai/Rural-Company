import { useState } from "react";
import ServicePopup from "./ServicePopup";

interface SubService {
  name: string;
  icon: string;
}

export default function HeroSection() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [subServices, setSubServices] = useState<SubService[]>([]);

  const openPopup = (title: string, services: SubService[]) => {
    setPopupTitle(title);
    setSubServices(services);
    setPopupOpen(true);
  };

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

          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-5 py-3 rounded-lg shadow bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          {/* Grid Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Women's Salon */}
            <div
              className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
              onClick={() =>
                openPopup("Women's Salon", [
                  { name: "Salon for Women", icon: "/assets/salonforwomenicon.webp" },
                  { name: "Spa for Women", icon: "/assets/spaforwomenicon.webp" },
                  { name: "Hair Studio", icon: "/assets/hairstudioforwomenicon.webp" },
                ])
              }
            >
              <img src="/assets/salonforwomenicon.webp" alt="" className="w-10 h-10 mb-2" />
              <p className="text-center text-sm font-medium text-gray-700">Women’s Salon</p>
            </div>

            {/* Men’s Salon & Massage */}
            <div
              className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
              onClick={() =>
                openPopup("Men's Salon & Massage", [
                  { name: "Salon for Men", icon: "/assets/salonformenicon.webp" },
                  { name: "Massage for Men", icon: "/assets/massageformenicon.webp" },
                ])
              }
            >
              <img src="/assets/salonformenicon.webp" alt="" className="w-10 h-10 mb-2" />
              <p className="text-center text-sm font-medium text-gray-700">Men’s Salon</p>
            </div>

            {/* AC & Appliance Repair */}
            <div
              className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
              onClick={() =>
                openPopup("AC & Appliance Repair", [
                  { name: "AC & Appliance", icon: "/assets/acappliancerepairicon.webp" },
                  { name: "Laptop", icon: "/assets/laptopicon.webp" },
                  { name: "TV", icon: "/assets/telivisionicon.webp" },
                  { name: "Chimney", icon: "/assets/chimneyicon.webp" },
                  { name: "Microwave", icon: "/assets/microwaveicon.webp" },
                  { name: "Stove", icon: "/assets/stoveicon.webp" },
                  { name: "Refrigerator", icon: "/assets/refrigeratoricon.webp" },
                  { name: "Purifier", icon: "/assets/purifiericon.webp" },
                  { name: "Geyser", icon: "/assets/geysericon.webp" },
                ])
              }
            >
              <img src="/assets/acappliancerepairicon.webp" alt="" className="w-10 h-10 mb-2" />
              <p className="text-center text-sm font-medium text-gray-700">AC Repair</p>
            </div>

            {/* Cleaning & Pest Control */}
            <div
              className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
              onClick={() =>
                openPopup("Cleaning & Pest Control", [
                  { name: "Sofa & Carpet", icon: "/assets/sofaandcarpeticon.webp" },
                  { name: "Full Home Cleaning", icon: "/assets/fullhomeicon.webp" },
                  { name: "Bathroom Cleaning", icon: "/assets/bathroomclearningicon.webp" },
                  { name: "Bed Bugs Control", icon: "/assets/bedbugscontrolicon.webp" },
                  { name: "Termite Control", icon: "/assets/termitecontrolicon.webp" },
                  { name: "General Pest Control", icon: "/assets/cockroach ant and generalpestcontrolicon.webp" },
                ])
              }
            >
              <img src="/assets/fullhomeicon.webp" alt="" className="w-10 h-10 mb-2" />
              <p className="text-center text-sm font-medium text-gray-700">Cleaning</p>
            </div>

            {/* Electrician, Plumber, Carpenter */}
            <div
              className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
              onClick={() =>
                openPopup("Electrician, Plumber, Carpenter", [
                  { name: "Electrician & Plumber", icon: "/assets/electricianplumbericon.webp" },
                  { name: "Geyser Work", icon: "/assets/geysicon.webp" },
                  { name: "Furniture Assembly", icon: "/assets/furnitureassemblyicon.webp" },
                  { name: "Fan Installation", icon: "/assets/faninstallationicon.webp" },
                  { name: "Plumber", icon: "/assets/plumbericon.webp" },
                ])
              }
            >
              <img src="/assets/electricainicon.webp" alt="" className="w-10 h-10 mb-2" />
              <p className="text-center text-sm font-medium text-gray-700">Electrician</p>
            </div>
             <div
              className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
              onClick={() =>
                openPopup("Electrician, Plumber, Carpenter", [
                  { name: "Electrician & Plumber", icon: "/assets/electricianplumbericon.webp" },
                  { name: "Geyser Work", icon: "/assets/geysicon.webp" },
                  { name: "Furniture Assembly", icon: "/assets/furnitureassemblyicon.webp" },
                  { name: "Fan Installation", icon: "/assets/faninstallationicon.webp" },
                  { name: "Plumber", icon: "/assets/plumbericon.webp" },
                ])
              }
            >
              <img src="/assets/native.jpeg" alt="" className="w-10 h-10 mb-2" />
              <p className="text-center text-sm font-medium text-gray-700">Native water Purifier </p>
            </div>

            {/* Painting & Smart Locks */}
            <div className="flex flex-col gap-4 col-span-3 md:flex-row">
              <div
                className="flex flex-1 flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
                onClick={() =>
                  openPopup("Smart Locks", [
                    { name: "Native Lock", icon: "/assets/smartlockicon.webp" },
                  ])
                }
              >
                <img src="/assets/smartlockicon.webp" alt="" className="w-10 h-10 mb-2" />
                <p className="text-center text-sm font-medium text-gray-700">Smart Locks</p>
              </div>

              <div
                className="flex flex-1 flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer"
                onClick={() =>
                  openPopup("Painting", [
                    { name: "Painting & Waterproofing", icon: "/assets/paintingwatericon.webp" },
                  ])
                }
              >
                <img src="/assets/paintingwatericon.webp" alt="" className="w-10 h-10 mb-2" />
                <p className="text-center text-sm font-medium text-gray-700">Painting</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10 flex-wrap justify-center">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-3xl font-bold text-gray-800">4.8</h3>
                <span className="text-yellow-500 text-xl mt-1">★</span>
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
            <img src="/assets/images.png" alt="Spa" className="w-full h-full object-cover rounded-xl shadow-md" />
            <img src="/assets/images (1).jpeg" alt="Salon" className="w-full h-full object-cover rounded-xl shadow-md" />
            <img src="/assets/pexels-richard-low-hong-33206323-7347538.jpg" alt="AC Repair" className="w-full h-full object-cover rounded-xl shadow-md" />
            <img src="/assets/pexels-ian-panelo-3230236.jpg" alt="Electrician" className="w-full h-full object-cover rounded-xl shadow-md" />
          </div>
        </div>
      </div>

      {/* Popup */}
      <ServicePopup
        title={popupTitle}
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        subServices={subServices}
      />
    </section>
  );
}
