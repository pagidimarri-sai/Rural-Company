// const spaItems = [
//   {
//     imageUrl: "/assets/natural care.jpg",
//     label: "Natural Care",
//     link: "/spa/natural-care",
//   },
//   {
//     imageUrl: "/assets/stress relief.jpg",
//     label: "Stress Relief",
//     link: "/spa/stress-relief",
//   },
//   {
//     imageUrl: "/assets/neck pain.jpeg",
//     label: "Neck Pain Therapy",
//     link: "/spa/neck-pain-therapy",
//   },
// ];

// export default function SpaForWomenSection() {
//   return (
//     <section className="bg-gray-100 pt-12 pb-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-xl font-bold text-gray-800 mb-6">Spa for Women</h2>

//         <div className="flex flex-wrap gap-6 justify-center md:justify-start">
//           {spaItems.map((item, index) => (
//             <a
//               href={item.link}
//               key={index}
//               className="w-[250px] flex flex-col items-center hover:scale-105 transition-transform duration-300"
//             >
//               <img
//                 src={item.imageUrl}
//                 alt={item.label}
//                 className="w-full h-[250px] object-cover rounded-xl shadow-md"
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



const spaItems = [
  {
    imageUrl: "/assets/natural care.jpg",
    label: "Natural Care",
    link: "/spa/natural-care",
  },
  {
    imageUrl: "/assets/stress relief.jpg",
    label: "Stress Relief",
    link: "/spa/stress-relief",
  },
  {
    imageUrl: "/assets/neck pain.jpeg",
    label: "Neck Pain Therapy",
    link: "/spa/neck-pain-therapy",
  },
];

export default function SpaForWomenSection() {
  return (
    <section className="bg-gray-100 pt-12 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Spa for Women</h2>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {spaItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="w-[250px] flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.label}
                className="w-full h-[250px] object-cover rounded-xl shadow-md"
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
