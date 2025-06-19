// // src/components/HeroSection.tsx


// import { FaStar, FaUserAlt, FaMale, FaTools, FaBroom, FaBug, FaBolt, FaLock, FaPaintRoller } from "react-icons/fa";

// import spaImage from '../assets/images.jpeg';
// import salonImage from '../assets/images (1).jpeg';
// import acRepairImage from '../assets/pexels-richard-low-hong-33206323-7347538.jpg';
// import electricianImage from '../assets/pexels-ian-panelo-3230236.jpg';

// function HeroSection() {
//   return (
//     <section className="bg-gray-100 py-10 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        
//         {/* LEFT SIDE */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
//             Home services<br />at your doorstep
//           </h2>

//           {/* Search Box */}
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="w-full px-5 py-3 rounded-lg shadow bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
//             />
//           </div>

//           {/* Grid: 6 items in 2 rows × 3 columns */}
//           <div className="grid grid-cols-3 gap-4 mb-4">
//             <ServiceCard icon={<FaUserAlt />} label="Women’s Salon" />
//             <ServiceCard icon={<FaMale />} label="Men’s Salon" />
//             <ServiceCard icon={<FaTools />} label="AC Repair" />
//             <ServiceCard icon={<FaBroom />} label="Cleaning" />
//             <ServiceCard icon={<FaBug />} label="Pest Control" />
//             <ServiceCard icon={<FaBolt />} label="Electrician" />
//           </div>

//           {/* Third row: 2 wide items side by side */}
//           <div className="flex gap-4 mb-6">
//             <ServiceCard
//               icon={<FaLock />}
//               label="Smart Locks (Native)"
//               className="flex-1"
//             />
//             <ServiceCard
//               icon={<FaPaintRoller />}
//               label="Painting & Waterproofing"
//               className="flex-1"
//             />
//           </div>

//           {/* ✅ Stats Section - placed correctly inside left side */}
//           {/* ✅ Stats Section - centered in left half */}
// <div className="mt-14 flex gap-10 flex-wrap justify-center">
//   <div>
//     <div className="flex items-center gap-2">
//       <h3 className="text-3xl font-bold text-gray-800">4.8</h3>
//       <FaStar className="text-yellow-500 text-xl mt-1" />
//     </div>
//     <p className="text-sm text-gray-500">Service Rating*</p>
//   </div>
//   <div>
//     <h3 className="text-3xl font-bold text-gray-800">12M+</h3>
//     <p className="text-sm text-gray-500">Customers Globally*</p>
//   </div>
// </div>

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-full md:w-1/2 flex justify-center items-center">
//           <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[600px] w-full max-w-md">
//             <img
//               src={spaImage}
//               alt="Spa"
//               className="w-full h-full object-cover rounded-xl shadow-md"
//             />
//             <img
//               src={salonImage}
//               alt="Salon"
//               className="w-full h-full object-cover rounded-xl shadow-md"
//             />
//             <img
//               src={acRepairImage}
//               alt="AC Repair"
//               className="w-full h-full object-cover rounded-xl shadow-md"
//             />
//             <img
//               src={electricianImage}
//               alt="Electrician"
//               className="w-full h-full object-cover rounded-xl shadow-md"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ServiceCard({
//   icon,
//   label,
//   className = "",
// }: {
//   icon: JSX.Element;
//   label: string;
//   className?: string;
// }) {
//   return (
//     <div
//       className={`flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer ${className}`}
//     >
//       <div className="text-purple-600 text-2xl mb-2">{icon}</div>
//       <p className="text-center text-sm font-medium text-gray-700">{label}</p>
//     </div>
//   );
// }

// export default HeroSection;

// src/components/HeroSection.tsx

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

import spaImage from "../assets/images.jpeg";
import salonImage from "../assets/images (1).jpeg";
import acRepairImage from "../assets/pexels-richard-low-hong-33206323-7347538.jpg";
import electricianImage from "../assets/pexels-ian-panelo-3230236.jpg";

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-[1280px] w-full px-6 mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
            Home services<br />at your doorstep
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
            <ServiceCard icon={<FaUserAlt />} label="Women’s Salon" />
            <ServiceCard icon={<FaMale />} label="Men’s Salon" />
            <ServiceCard icon={<FaTools />} label="AC Repair" />
            <ServiceCard icon={<FaBroom />} label="Cleaning" />
            <ServiceCard icon={<FaBug />} label="Pest Control" />
            <ServiceCard icon={<FaBolt />} label="Electrician" />
          </div>

          {/* Third row: 2 wide items side by side */}
          <div className="flex gap-4 mb-6">
            <ServiceCard
              icon={<FaLock />}
              label="Smart Locks (Native)"
              className="flex-1"
            />
            <ServiceCard
              icon={<FaPaintRoller />}
              label="Painting & Waterproofing"
              className="flex-1"
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

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[600px] w-full max-w-md">
            <img
              src={spaImage}
              alt="Spa"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <img
              src={salonImage}
              alt="Salon"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <img
              src={acRepairImage}
              alt="AC Repair"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
            <img
              src={electricianImage}
              alt="Electrician"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  label,
  className = "",
}: {
  icon: JSX.Element;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer ${className}`}
    >
      <div className="text-purple-600 text-2xl mb-2">{icon}</div>
      <p className="text-center text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
}
