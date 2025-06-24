// const appliances = [
//   {
//     imageUrl: "/assets/acf.jpg",
//     title: "AC Repair & Service",
//     link: "/appliance/ac-repair",
//   },
//   {
//     imageUrl: "/assets/native.jpeg",
//     title: "Smart Locks / Native Devices",
//     link: "/appliance/smart-devices",
//   },
//   {
//     imageUrl: "/assets/refrigerator.webp",
//     title: "Refrigerator Repair",
//     link: "/appliance/refrigerator-repair",
//   },
//   {
//     imageUrl: "/assets/television.webp",
//     title: "Television Service",
//     link: "/appliance/television-service",
//   },
//   {
//     imageUrl: "/assets/washng machine.jpg", // ✅ Correctly references with space
//     title: "Washing Machine Repair",
//     link: "/appliance/washing-machine",
//   },
// ];

// export default function ApplianceRepair() {
//   return (
//     <section className="bg-gray-100 pt-6 pb-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Appliance Repair & Service</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {appliances.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               className="group transition-transform transform hover:scale-105 text-center"
//             >
//               <div className="rounded-xl overflow-hidden shadow-md">
//                 <img
//                   src={item.imageUrl}
//                   alt={item.title}
//                   className="w-full h-[230px] object-cover"
//                 />
//               </div>
//               <p className="mt-2 text-sm font-medium text-gray-800">
//                 {item.title}
//               </p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

const appliances = [
  {
    imageUrl: "/assets/acf.jpg",
    title: "AC Repair & Service",
    link: "/appliance/ac-repair",
  },
  {
    imageUrl: "/assets/native.jpeg",
    title: "Smart Locks / Native Devices",
    link: "/appliance/smart-devices",
  },
  {
    imageUrl: "/assets/refrigerator.webp",
    title: "Refrigerator Repair",
    link: "/appliance/refrigerator-repair",
  },
  {
    imageUrl: "/assets/television.webp",
    title: "Television Service",
    link: "/appliance/television-service",
  },
  {
    imageUrl: "/assets/washng machine.jpg",
    title: "Washing Machine Repair",
    link: "/appliance/washing-machine",
  },
];

export default function ApplianceRepair() {
  return (
    <section className="bg-gray-100 pt-6 md:pt-8 pb-10 md:pb-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
          Appliance Repair & Service
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {appliances.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group transition-transform transform hover:scale-[1.02] text-center"
            >
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 md:h-60 lg:h-52 xl:h-60 object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800 px-2">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
