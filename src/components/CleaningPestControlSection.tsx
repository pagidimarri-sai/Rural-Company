// const services = [
//   {
//     imageUrl: "/assets/bathroom clarning.jpg",
//     label: "Bathroom Cleaning",
//     link: "/services/bathroom-cleaning",
//   },
//   {
//     imageUrl: "/assets/cockroach andt and general pest control.webp",
//     label: "Pest Control (Cockroach & Ant)",
//     link: "/services/pest-control",
//   },
//   {
//     imageUrl: "/assets/kitchen cleaning.jpg",
//     label: "Kitchen Cleaning",
//     link: "/services/kitchen-cleaning",
//   },
//   {
//     imageUrl: "/assets/full home cleaning.jpg",
//     label: "Full Home Cleaning",
//     link: "/services/home-cleaning",
//   },
//   {
//     imageUrl: "/assets/sofa and carpet cleaning.webp",
//     label: "Sofa & Carpet Cleaning",
//     link: "/services/sofa-carpet-cleaning",
//   },
// ];

// export default function CleaningPestControlSection() {
//   return (
//     <section className="bg-transparent py-10 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl font-bold text-gray-800 mb-8">
//           Cleaning & Pest Control
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {services.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
//             >
//               <img
//                 src={item.imageUrl}
//                 alt={item.label}
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//               <p className="mt-2 text-sm font-medium text-gray-800 text-center">
//                 {item.label}
//               </p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

const services = [
  {
    imageUrl: "/assets/bathroom clarning.jpg",
    label: "Bathroom Cleaning",
    link: "/services/bathroom-cleaning",
  },
  {
    imageUrl: "/assets/cockroach andt and general pest control.webp",
    label: "Pest Control (Cockroach & Ant)",
    link: "/services/pest-control",
  },
  {
    imageUrl: "/assets/kitchen cleaning.jpg",
    label: "Kitchen Cleaning",
    link: "/services/kitchen-cleaning",
  },
  {
    imageUrl: "/assets/full home cleaning.jpg",
    label: "Full Home Cleaning",
    link: "/services/home-cleaning",
  },
  {
    imageUrl: "/assets/sofa and carpet cleaning.webp",
    label: "Sofa & Carpet Cleaning",
    link: "/services/sofa-carpet-cleaning",
  },
];

export default function CleaningPestControlSection() {
  return (
    <section className="bg-transparent py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
          Cleaning & Pest Control
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {services.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.label}
                className="w-full h-36 sm:h-44 md:h-48 object-cover rounded-lg"
              />
              <p className="mt-2 text-sm font-medium text-gray-800 text-center">
                {item.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
