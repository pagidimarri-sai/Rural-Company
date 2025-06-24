// import { Star, MapPin } from "lucide-react";

// const professionals = [
//   {
//     name: "Sarah Johnson",
//     service: "House Cleaning",
//     rating: 4.9,
//     reviews: 127,
//     experience: "5+ years",
//     location: "Downtown",
//     image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
//   },
//   {
//     name: "Mike Rodriguez",
//     service: "Electrician",
//     rating: 4.8,
//     reviews: 89,
//     experience: "8+ years",
//     location: "Midtown",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
//   },
//   {
//     name: "Emily Chen",
//     service: "Beauty Services",
//     rating: 4.9,
//     reviews: 156,
//     experience: "6+ years",
//     location: "Uptown",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
//   },
//   {
//     name: "David Kumar",
//     service: "Appliance Repair",
//     rating: 4.7,
//     reviews: 93,
//     experience: "7+ years",
//     location: "Central",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
//   },
// ];

// export default function FeaturedProfessionals() {
//   return (
//     <section className="py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Left-aligned heading */}
//         <div className="mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Professionals</h2>
//           <p className="text-lg text-gray-600">Highly rated experts ready to serve you</p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {professionals.map((pro, idx) => (
//             <a
//               key={idx}
//               href="#"
//               className="group block rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
//             >
//               <div className="text-center">
//                 <div className="relative mb-4">
//                   <img
//                     src={pro.image}
//                     alt={pro.name}
//                     className="w-20 h-20 rounded-full mx-auto object-cover"
//                   />
//                   <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
//                       ✓ Verified
//                     </span>
//                   </div>
//                 </div>

//                 <h3 className="text-lg font-semibold mb-1 group-hover:text-purple-600">
//                   {pro.name}
//                 </h3>
//                 <p className="text-purple-600 font-medium mb-2">{pro.service}</p>

//                 <div className="flex items-center justify-center mb-2">
//                   <Star className="h-4 w-4 text-yellow-400 fill-current" />
//                   <span className="ml-1 text-sm font-medium">{pro.rating}</span>
//                   <span className="ml-1 text-sm text-gray-500">({pro.reviews})</span>
//                 </div>

//                 <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
//                   <MapPin className="h-4 w-4 mr-1" />
//                   {pro.location}
//                 </div>

//                 <p className="text-sm text-gray-600 mb-4">{pro.experience} experience</p>

//                 <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
//                   Book Now
//                 </button>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Star, MapPin } from "lucide-react";

const professionals = [
  {
    name: "Sarah Johnson",
    service: "House Cleaning",
    rating: 4.9,
    reviews: 127,
    experience: "5+ years",
    location: "Downtown",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
  },
  {
    name: "Mike Rodriguez",
    service: "Electrician",
    rating: 4.8,
    reviews: 89,
    experience: "8+ years",
    location: "Midtown",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    name: "Emily Chen",
    service: "Beauty Services",
    rating: 4.9,
    reviews: 156,
    experience: "6+ years",
    location: "Uptown",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    name: "David Kumar",
    service: "Appliance Repair",
    rating: 4.7,
    reviews: 93,
    experience: "7+ years",
    location: "Central",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
];

export default function FeaturedProfessionals() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Featured Professionals
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Highly rated experts ready to serve you
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionals.map((pro, idx) => (
            <a
              key={idx}
              href="#"
              className="group block rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6"
            >
              <div className="text-center">
                <div className="relative mb-4">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                      ✓ Verified
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-semibold mb-1 group-hover:text-purple-600">
                  {pro.name}
                </h3>
                <p className="text-purple-600 text-sm sm:text-base font-medium mb-2">
                  {pro.service}
                </p>

                <div className="flex items-center justify-center mb-2 text-sm">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{pro.rating}</span>
                  <span className="ml-1 text-gray-500">({pro.reviews})</span>
                </div>

                <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {pro.location}
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {pro.experience} experience
                </p>

                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Book Now
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
