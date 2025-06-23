// // // import { useParams } from "react-router-dom";
// // // import { useState } from "react";
// // // import { useCart } from "../contexts/CartContext"; // ✅ Import cart context

// // // interface CartItem {
// // //   title: string;
// // //   price: string;
// // //   quantity: number;
// // // }

// // // const servicesData: Record<string, { banner: string; name: string }> = {
// // //   "spa-for-women": {
// // //     name: "Spa for Women",
// // //     banner: "/assets/adimg.webp",
// // //   },
// // //   "hair-studio": {
// // //     name: "Hair Studio",
// // //     banner: "/assets/hair-studio-banner.webp",
// // //   },
// // // };

// // // const serviceItems = [
// // //   { name: "Hair Bleach & Detan", icon: "/assets/hairbleachanddetaniconn.webp" },
// // //   { name: "Pedicure & Manicure", icon: "/assets/pedicureandmanicureiconn.webp" },
// // //   { name: "Korean Facial", icon: "/assets/koreanfacialiconn.webp" },
// // //   { name: "Facial", icon: "/assets/facialiconn.webp" },
// // //   { name: "Ayurvedic Facial", icon: "/assets/ayurvedicffacialiconn.webp" },
// // //   { name: "Clean Up", icon: "/assets/cleanupiconn.webp" },
// // //   { name: "Threading & Waxing", icon: "/assets/threading and face waxing iconn.webp" },
// // //   { name: "Waxing", icon: "/assets/waxingiconn.webp" },
// // //   { name: "Packages", icon: "/assets/packagesiconn.webp" },
// // // ];

// // // const packages = [
// // //   { title: "Full Body Wax + Cleanup", description: "Includes arms, legs, underarms, and basic cleanup", price: "₹399", duration: "45 mins" },
// // //   { title: "Gold Facial + Detan Pack", description: "Brightening facial with tan removal", price: "₹499", duration: "60 mins" },
// // //   { title: "Hair Bleach + Detan Pack", description: "Full face bleach with tan removal treatment", price: "₹349", duration: "30 mins" },
// // //   { title: "Detan with Brightening Facial", description: "Detan treatment followed by an instant glow facial", price: "₹599", duration: "40 mins" },
// // //   { title: "Underarm Detan", description: "Removes darkness and evens skin tone", price: "₹199", duration: "20 mins" },
// // //   { title: "Classic Pedicure", description: "Nail trimming, scrubbing, and moisturizing", price: "₹299", duration: "40 mins" },
// // //   { title: "Deluxe Manicure", description: "Hand soak, exfoliation, cuticle care, and massage", price: "₹349", duration: "35 mins" },
// // //   { title: "Manicure + Pedicure Combo", description: "Complete hand and foot care", price: "₹599", duration: "70 mins" },
// // //   { title: "Basic Facial", description: "Cleanse, scrub, massage, and mask", price: "₹299", duration: "30 mins" },
// // //   { title: "Anti-Aging Facial", description: "Reduces fine lines and improves skin elasticity", price: "₹699", duration: "50 mins" },
// // //   { title: "Instant Glow Facial", description: "Brightening facial for dull skin", price: "₹399", duration: "30 mins" },
// // //   { title: "Full Arms Waxing", description: "Hair removal from shoulders to fingers", price: "₹199", duration: "20 mins" },
// // //   { title: "Full Legs Waxing", description: "Smooth legs from thighs to toes", price: "₹249", duration: "25 mins" },
// // //   { title: "Bridal Glow Package", description: "Facial, waxing, threading, and pedicure combo", price: "₹1499", duration: "120 mins" },
// // // ];

// // // export default function ServiceDetailPage() {
// // //   const { serviceSlug } = useParams();
// // //   const service = servicesData[serviceSlug ?? ""];

// // //   const { cartItems, addToCart, updateQuantity, cartTotal } = useCart(); // ✅ Use Cart Context
// // //   const [search, setSearch] = useState("");
// // //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // //   const handleAddToCart = (pack: { title: string; price: string }) => {
// // //   const numericPrice = parseFloat(pack.price.replace("₹", ""));
// // //   setCartItems((prev) => {
// // //     const exists = prev.find((item) => item.title === pack.title);
// // //     if (exists) {
// // //       return prev.map((item) =>
// // //         item.title === pack.title ? { ...item, quantity: item.quantity + 1 } : item
// // //       );
// // //     } else {
// // //       return [...prev, { title: pack.title, price: numericPrice, quantity: 1 }];
// // //     }
// // //   });

// // //   };

// // //   const filteredPackages = selectedCategory
// // //     ? packages.filter((p) => p.title.toLowerCase().includes(selectedCategory.toLowerCase()))
// // //     : packages;

// // //   if (!service) return <div className="p-6">Service not found</div>;

// // //   return (
// // //     <section className="max-w-[1280px] mx-auto px-4 py-10 relative">
// // //       <div className="flex gap-6">
// // //         {/* Sidebar Filter */}
// // //         <div className="w-[40%] bg-white border border-gray-200 rounded-2xl p-4 shadow">
// // //           <input
// // //             type="text"
// // //             placeholder="Search for a service"
// // //             value={search}
// // //             onChange={(e) => setSearch(e.target.value)}
// // //             className="w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md"
// // //           />
// // //           <div className="grid grid-cols-3 gap-2">
// // //             {serviceItems
// // //               .filter((item) =>
// // //                 item.name.toLowerCase().includes(search.toLowerCase())
// // //               )
// // //               .map((item, i) => (
// // //                 <div
// // //                   key={i}
// // //                   onClick={() => setSelectedCategory(item.name)}
// // //                   className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
// // //                 >
// // //                   <img
// // //                     src={item.icon}
// // //                     alt={item.name}
// // //                     className="w-[60px] h-[85px] object-cover mb-1"
// // //                   />
// // //                   <p className="text-[11px] text-center text-gray-700 leading-tight">
// // //                     {item.name}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //           </div>
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="w-[60%] space-y-6 overflow-y-auto max-h-[85vh] pr-2">
// // //           <img
// // //             src={service.banner}
// // //             alt={service.name}
// // //             className="w-full h-64 object-cover rounded-xl shadow-md"
// // //           />

// // //           <div className="flex gap-6">
// // //             <div className="w-[60%] space-y-4">
// // //               <h2 className="text-xl font-semibold text-gray-800 mb-2">
// // //                 Packages {selectedCategory && `(Filtered: ${selectedCategory})`}
// // //               </h2>
// // //               {filteredPackages.map((pack, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
// // //                 >
// // //                   <div className="flex justify-between items-start mb-2">
// // //                     <h3 className="text-lg font-semibold text-gray-800">
// // //                       {pack.title}
// // //                     </h3>
// // //                     <span className="text-sm text-gray-600">{pack.duration}</span>
// // //                   </div>
// // //                   <p className="text-sm text-gray-600 mb-2">{pack.description}</p>
// // //                   <div className="flex justify-between items-center">
// // //                     <span className="text-xl font-bold text-purple-600">
// // //                       {pack.price}
// // //                     </span>
// // //                     <button
// // //                       className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
// // //                       onClick={() => handleAddToCart(pack)}
// // //                     >
// // //                       Add to Cart
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Cart Summary */}
// // //             <div className="w-[40%] sticky top-10 h-fit">
// // //               <div className="bg-white border rounded-xl shadow p-4 mb-6">
// // //                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Cart</h3>
// // //                 {cartItems.length === 0 ? (
// // //                   <p className="text-sm text-gray-500">No items in your cart</p>
// // //                 ) : (
// // //                   <ul className="space-y-3">
// // //                     {cartItems.map((item, idx) => (
// // //                       <li key={idx} className="flex justify-between items-center">
// // //                         <div>
// // //                           <h4 className="text-sm font-medium">{item.title}</h4>
// // //                           <p className="text-sm text-gray-600">{item.price}</p>
// // //                         </div>
// // //                         <div className="flex items-center gap-2">
// // //                           <button
// // //                             onClick={() => updateQuantity(item.title, -1)}
// // //                             className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
// // //                           >
// // //                             −
// // //                           </button>
// // //                           <span className="text-sm">{item.quantity}</span>
// // //                           <button
// // //                             onClick={() => updateQuantity(item.title, 1)}
// // //                             className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
// // //                           >
// // //                             +
// // //                           </button>
// // //                         </div>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 )}
// // //                 <div className="mt-4 text-right font-semibold text-purple-700">
// // //                   Total: ₹{cartTotal.toFixed(2)}
// // //                 </div>
// // //               </div>

// // //               <div className="bg-purple-50 border border-purple-200 rounded-xl shadow p-4">
// // //                 <h3 className="text-lg font-semibold text-purple-700 mb-2">UC Promise</h3>
// // //                 <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
// // //                   <li>4.5+ Rated Beauticians</li>
// // //                   <li>Luxury Salon Experience</li>
// // //                   <li>Premium Branded Products</li>
// // //                 </ul>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Floating Cart (Mobile View) */}
// // //       {cartItems.length > 0 && (
// // //         <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
// // //           View Cart • ₹{cartTotal.toFixed(2)}
// // //         </div>
// // //       )}
// // //     </section>
// // //   );
// // // }


// // // File: src/pages/ServiceDetailPage.tsx
// // // import { useParams } from "react-router-dom";
// // // import { useState } from "react";
// // // import { useCart } from "../contexts/CartContext";

// // // const servicesData: Record<string, { banner: string; name: string }> = {
// // //   "spa-for-women": {
// // //     name: "Spa for Women",
// // //     banner: "/assets/adimg.webp",
// // //   },
// // //   "hair-studio": {
// // //     name: "Hair Studio",
// // //     banner: "/assets/hair-studio-banner.webp",
// // //   },
// // // };

// // // const serviceItems = [
// // //   { name: "Hair Bleach & Detan", icon: "/assets/hairbleachanddetaniconn.webp" },
// // //   { name: "Pedicure & Manicure", icon: "/assets/pedicureandmanicureiconn.webp" },
// // //   { name: "Korean Facial", icon: "/assets/koreanfacialiconn.webp" },
// // //   { name: "Facial", icon: "/assets/facialiconn.webp" },
// // //   { name: "Ayurvedic Facial", icon: "/assets/ayurvedicffacialiconn.webp" },
// // //   { name: "Clean Up", icon: "/assets/cleanupiconn.webp" },
// // //   { name: "Threading & Waxing", icon: "/assets/threading and face waxing iconn.webp" },
// // //   { name: "Waxing", icon: "/assets/waxingiconn.webp" },
// // //   { name: "Packages", icon: "/assets/packagesiconn.webp" },
// // // ];

// // // const packages = [
// // //   { title: "Full Body Wax + Cleanup", description: "Includes arms, legs, underarms, and basic cleanup", price: "₹399", duration: "45 mins" },
// // //   { title: "Gold Facial + Detan Pack", description: "Brightening facial with tan removal", price: "₹499", duration: "60 mins" },
// // //   { title: "Hair Bleach + Detan Pack", description: "Full face bleach with tan removal treatment", price: "₹349", duration: "30 mins" },
// // //   { title: "Detan with Brightening Facial", description: "Detan treatment followed by an instant glow facial", price: "₹599", duration: "40 mins" },
// // //   { title: "Underarm Detan", description: "Removes darkness and evens skin tone", price: "₹199", duration: "20 mins" },
// // //   { title: "Classic Pedicure", description: "Nail trimming, scrubbing, and moisturizing", price: "₹299", duration: "40 mins" },
// // //   { title: "Deluxe Manicure", description: "Hand soak, exfoliation, cuticle care, and massage", price: "₹349", duration: "35 mins" },
// // //   { title: "Manicure + Pedicure Combo", description: "Complete hand and foot care", price: "₹599", duration: "70 mins" },
// // //   { title: "Basic Facial", description: "Cleanse, scrub, massage, and mask", price: "₹299", duration: "30 mins" },
// // //   { title: "Anti-Aging Facial", description: "Reduces fine lines and improves skin elasticity", price: "₹699", duration: "50 mins" },
// // //   { title: "Instant Glow Facial", description: "Brightening facial for dull skin", price: "₹399", duration: "30 mins" },
// // //   { title: "Full Arms Waxing", description: "Hair removal from shoulders to fingers", price: "₹199", duration: "20 mins" },
// // //   { title: "Full Legs Waxing", description: "Smooth legs from thighs to toes", price: "₹249", duration: "25 mins" },
// // //   { title: "Bridal Glow Package", description: "Facial, waxing, threading, and pedicure combo", price: "₹1499", duration: "120 mins" },
// // // ];

// // // export default function ServiceDetailPage() {
// // //   const { serviceSlug } = useParams();
// // //   const service = servicesData[serviceSlug ?? ""];

// // //   const { cartItems, addToCart, updateQuantity, cartTotal } = useCart();
// // //   const [search, setSearch] = useState("");
// // //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // //   const handleAddToCart = (pack: { title: string; price: string }) => {
// // //   const numericPrice = parseFloat(pack.price.replace("₹", "")); // ✅ Ensure number

// // //    addToCart({
// // //     title: pack.title,
// // //     price: Number(pack.price.replace("₹", "")), // ✅ Ensure it's a number
// // //     quantity: 1,
// // //   });
// // // };


// // //   const filteredPackages = selectedCategory
// // //     ? packages.filter((p) => p.title.toLowerCase().includes(selectedCategory.toLowerCase()))
// // //     : packages;

// // //   if (!service) return <div className="p-6">Service not found</div>;

// // //   return (
// // //     <section className="max-w-[1280px] mx-auto px-4 py-10 relative">
// // //       <div className="flex gap-6">
// // //         {/* Sidebar Filter */}
// // //         <div className="w-[40%] bg-white border border-gray-200 rounded-2xl p-4 shadow">
// // //           <input
// // //             type="text"
// // //             placeholder="Search for a service"
// // //             value={search}
// // //             onChange={(e) => setSearch(e.target.value)}
// // //             className="w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md"
// // //           />
// // //           <div className="grid grid-cols-3 gap-2">
// // //             {serviceItems
// // //               .filter((item) =>
// // //                 item.name.toLowerCase().includes(search.toLowerCase())
// // //               )
// // //               .map((item, i) => (
// // //                 <div
// // //                   key={i}
// // //                   onClick={() => setSelectedCategory(item.name)}
// // //                   className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105"
// // //                 >
// // //                   <img
// // //                     src={item.icon}
// // //                     alt={item.name}
// // //                     className="w-[60px] h-[85px] object-cover mb-1"
// // //                   />
// // //                   <p className="text-[11px] text-center text-gray-700 leading-tight">
// // //                     {item.name}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //           </div>
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="w-[60%] space-y-6 overflow-y-auto max-h-[85vh] pr-2">
// // //           <img
// // //             src={service.banner}
// // //             alt={service.name}
// // //             className="w-full h-64 object-cover rounded-xl shadow-md"
// // //           />

// // //           <div className="flex gap-6">
// // //             <div className="w-[60%] space-y-4">
// // //               <h2 className="text-xl font-semibold text-gray-800 mb-2">
// // //                 Packages {selectedCategory && `(Filtered: ${selectedCategory})`}
// // //               </h2>
// // //               {filteredPackages.map((pack, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
// // //                 >
// // //                   <div className="flex justify-between items-start mb-2">
// // //                     <h3 className="text-lg font-semibold text-gray-800">
// // //                       {pack.title}
// // //                     </h3>
// // //                     <span className="text-sm text-gray-600">{pack.duration}</span>
// // //                   </div>
// // //                   <p className="text-sm text-gray-600 mb-2">{pack.description}</p>
// // //                   <div className="flex justify-between items-center">
// // //                     <span className="text-xl font-bold text-purple-600">
// // //                       {pack.price}
// // //                     </span>
// // //                     <button
// // //                       className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
// // //                       onClick={() => handleAddToCart(pack)}
// // //                     >
// // //                       Add to Cart
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Cart Summary */}
// // //             <div className="w-[40%] sticky top-10 h-fit">
// // //               <div className="bg-white border rounded-xl shadow p-4 mb-6">
// // //                 <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Cart</h3>
// // //                 {cartItems.length === 0 ? (
// // //                   <p className="text-sm text-gray-500">No items in your cart</p>
// // //                 ) : (
// // //                   <ul className="space-y-3">
// // //                     {cartItems.map((item, idx) => (
// // //                       <li key={idx} className="flex justify-between items-center">
// // //                         <div>
// // //                           <h4 className="text-sm font-medium">{item.title}</h4>
// // //                           <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
// // //                         </div>
// // //                         <div className="flex items-center gap-2">
// // //                           <button
// // //                             onClick={() => updateQuantity(item.title, -1)}
// // //                             className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
// // //                           >
// // //                             −
// // //                           </button>
// // //                           <span className="text-sm">{item.quantity}</span>
// // //                           <button
// // //                             onClick={() => updateQuantity(item.title, 1)}
// // //                             className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
// // //                           >
// // //                             +
// // //                           </button>
// // //                         </div>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 )}
// // //                 <div className="mt-4 text-right font-semibold text-purple-700">
// // //                   Total: ₹{cartTotal.toFixed(2)}
// // //                 </div>
// // //               </div>

// // //               <div className="bg-purple-50 border border-purple-200 rounded-xl shadow p-4">
// // //                 <h3 className="text-lg font-semibold text-purple-700 mb-2">UC Promise</h3>
// // //                 <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
// // //                   <li>4.5+ Rated Beauticians</li>
// // //                   <li>Luxury Salon Experience</li>
// // //                   <li>Premium Branded Products</li>
// // //                 </ul>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Floating Cart (Mobile View) */}
// // //       {cartItems.length > 0 && (
// // //         <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
// // //           View Cart • ₹{cartTotal.toFixed(2)}
// // //         </div>
// // //       )}
// // //     </section>
// // //   );
// // // }

// // // File: src/pages/ServiceDetailPage.tsx
// // import { useParams, useNavigate } from "react-router-dom";
// // import { useState } from "react";
// // import { useCart } from "../contexts/CartContext";

// // // Define service-specific data
// // const servicesData: Record<
// //   string,
// //   { banner: string; name: string; packages: PackageType[] }
// // > = {
// //   "spa-for-women": {
// //     name: "Spa for Women",
// //     banner: "/assets/spa-banner.webp",
// //     packages: [
// //       { title: "Full Body Spa", description: "Relaxing full body massage with aroma oils", price: "₹599", duration: "60 mins" },
// //       { title: "Back & Shoulder Massage", description: "Deep tissue massage for stress relief", price: "₹349", duration: "30 mins" },
// //       { title: "Foot Reflexology", description: "Foot massage using acupressure", price: "₹299", duration: "25 mins" },
// //       { title: "Head Massage", description: "Nourishing oil massage for scalp and hair", price: "₹199", duration: "20 mins" },
// //       { title: "Bridal Spa Package", description: "Pre-wedding spa combo with body polish", price: "₹1499", duration: "120 mins" },
// //       { title: "Detox Body Wrap", description: "Seaweed and clay wrap to detox skin", price: "₹799", duration: "45 mins" },
// //       { title: "Body Scrub & Polish", description: "Skin exfoliation and brightening polish", price: "₹499", duration: "40 mins" },
// //       { title: "Aromatherapy", description: "Massage with essential oils for relaxation", price: "₹599", duration: "60 mins" },
// //     ],
// //   },
// //   "hair-studio": {
// //     name: "Hair Studio",
// //     banner: "/assets/hair-studio-banner.webp",
// //     packages: [
// //       { title: "Haircut + Styling", description: "Trendy haircut and blow dry", price: "₹299", duration: "30 mins" },
// //       { title: "Hair Spa", description: "Deep conditioning & massage", price: "₹499", duration: "45 mins" },
// //       { title: "Hair Color Global", description: "Full hair coloring with premium products", price: "₹999", duration: "90 mins" },
// //       { title: "Hair Smoothening", description: "Keratin-based treatment", price: "₹1499", duration: "120 mins" },
// //       { title: "Root Touch-Up", description: "Covers grey hair roots", price: "₹349", duration: "30 mins" },
// //       { title: "Hair Wash & Blow Dry", description: "Wash and styling", price: "₹199", duration: "20 mins" },
// //     ],
// //   },
// //   "salon-for-women": {
// //     name: "Salon for Women",
// //     banner: "/assets/salon-for-women-banner.webp",
// //     packages: [
// //       { title: "Threading & Waxing", description: "Eyebrows, upper lips, and face waxing", price: "₹199", duration: "30 mins" },
// //       { title: "Facial + Cleanup", description: "Complete skin treatment", price: "₹499", duration: "45 mins" },
// //       { title: "Full Body Wax", description: "Arms, legs, underarms", price: "₹599", duration: "60 mins" },
// //       { title: "Pedicure + Manicure", description: "Hand and foot care", price: "₹399", duration: "40 mins" },
// //       { title: "Bridal Glow Facial", description: "Instant glow and skin lift", price: "₹699", duration: "50 mins" },
// //       { title: "Underarm Detan", description: "Brightening detan treatment", price: "₹199", duration: "20 mins" },
// //       { title: "Luxury Facial", description: "Premium facial with gold kit", price: "₹799", duration: "60 mins" },
// //     ],
// //   },
// // };

// // const serviceItems = [
// //   { name: "Facial", icon: "/assets/facialiconn.webp" },
// //   { name: "Massage", icon: "/assets/spaiconn.webp" },
// //   { name: "Hair Services", icon: "/assets/hairbleachanddetaniconn.webp" },
// //   { name: "Waxing", icon: "/assets/waxingiconn.webp" },
// //   { name: "Packages", icon: "/assets/packagesiconn.webp" },
// // ];

// // type PackageType = {
// //   title: string;
// //   description: string;
// //   price: string;
// //   duration: string;
// // };

// // export default function ServiceDetailPage() {
// //   const { serviceSlug } = useParams();
// //   const navigate = useNavigate();
// //   const service = servicesData[serviceSlug ?? ""];
// //   const { cartItems, addToCart, updateQuantity, cartTotal } = useCart();

// //   const [search, setSearch] = useState("");
// //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// //   if (!service) return <div className="p-6">Service not found</div>;

// //   const filteredPackages = selectedCategory
// //     ? service.packages.filter((p) =>
// //         p.title.toLowerCase().includes(selectedCategory.toLowerCase())
// //       )
// //     : service.packages;

// //   const handleAddToCart = (pack: PackageType) => {
// //     const numericPrice = parseFloat(pack.price.replace("\u20b9", ""));
// //     addToCart({
// //       title: pack.title,
// //       price: numericPrice,
// //       quantity: 1,
// //     });
// //   };

// //   return (
// //     <section className="max-w-[1280px] mx-auto px-4 py-10 relative">
// //       <div className="flex gap-6">
// //         <div className="w-[40%] bg-white border rounded-2xl p-4 shadow">
// //           <input
// //             type="text"
// //             placeholder="Search for a service"
// //             value={search}
// //             onChange={(e) => setSearch(e.target.value)}
// //             className="w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md"
// //           />
// //           <div className="grid grid-cols-3 gap-2">
// //             {serviceItems.map((item, i) => (
// //               <div
// //                 key={i}
// //                 onClick={() => setSelectedCategory(item.name)}
// //                 className="flex flex-col items-center cursor-pointer hover:scale-105"
// //               >
// //                 <img src={item.icon} alt={item.name} className="w-[60px] h-[85px] mb-1" />
// //                 <p className="text-[11px] text-center text-gray-700">{item.name}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="w-[60%] space-y-6 overflow-y-auto max-h-[85vh] pr-2">
// //           <img src={service.banner} alt={service.name} className="w-full h-64 object-cover rounded-xl shadow-md" />

// //           <h2 className="text-xl font-semibold text-gray-800 mb-2">
// //             Packages {selectedCategory && `(Filtered: ${selectedCategory})`}
// //           </h2>

// //           {filteredPackages.map((pack, i) => (
// //             <div key={i} className="bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-lg">
// //               <div className="flex justify-between mb-2">
// //                 <h3 className="text-lg font-semibold">{pack.title}</h3>
// //                 <span className="text-sm text-gray-600">{pack.duration}</span>
// //               </div>
// //               <p className="text-sm text-gray-600 mb-2">{pack.description}</p>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-xl font-bold text-purple-600">{pack.price}</span>
// //                 <button
// //                   className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
// //                   onClick={() => handleAddToCart(pack)}
// //                 >
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="w-[30%] sticky top-10 h-fit">
// //           <div className="bg-white border rounded-xl shadow p-4 mb-6">
// //             <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
// //             {cartItems.length === 0 ? (
// //               <p className="text-sm text-gray-500">No items in your cart</p>
// //             ) : (
// //               <ul className="space-y-3">
// //                 {cartItems.map((item, idx) => (
// //                   <li key={idx} className="flex justify-between items-center">
// //                     <div>
// //                       <h4 className="text-sm font-medium">{item.title}</h4>
// //                       <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
// //                     </div>
// //                     <div className="flex items-center gap-2">
// //                       <button onClick={() => updateQuantity(item.title, -1)} className="px-2 py-1 bg-gray-200 rounded">−</button>
// //                       <span className="text-sm">{item.quantity}</span>
// //                       <button onClick={() => updateQuantity(item.title, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
// //                     </div>
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //             <div className="mt-4 text-right font-semibold text-purple-700">
// //               Total: ₹{cartTotal.toFixed(2)}
// //             </div>
// //             {cartItems.length > 0 && (
// //               <button
// //                 onClick={() => navigate("/cart")}
// //                 className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
// //               >
// //                 View Full Cart
// //               </button>
// //             )}
// //           </div>

// //           <div className="bg-purple-50 border border-purple-200 rounded-xl shadow p-4">
// //             <h3 className="text-lg font-semibold text-purple-700 mb-2">UC Promise</h3>
// //             <ul className="text-sm text-gray-700 list-disc list-inside">
// //               <li>4.5+ Rated Beauticians</li>
// //               <li>Luxury Salon Experience</li>
// //               <li>Premium Branded Products</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {cartItems.length > 0 && (
// //         <div
// //           className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer"
// //           onClick={() => navigate("/cart")}
// //         >
// //           View Cart • ₹{cartTotal.toFixed(2)}
// //         </div>
// //       )}
// //     </section>
// //   );
// // }

// // src/pages/ServiceDetailPage.tsx
// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "../contexts/CartContext";
// import { servicesData } from "../data/servicesData";
// import type { PackageType } from "../data/servicesData";
// const serviceItems = [
//   { name: "Facial", icon: "/assets/facialiconn.webp" },
//   { name: "Massage", icon: "/assets/spaiconn.webp" },
//   { name: "Hair Services", icon: "/assets/hairbleachanddetaniconn.webp" },
//   { name: "Waxing", icon: "/assets/waxingiconn.webp" },
//   { name: "Packages", icon: "/assets/packagesiconn.webp" },
// ];

// export default function ServiceDetailPage() {
//   const { serviceSlug } = useParams();
//   const navigate = useNavigate();
//   const service = servicesData[serviceSlug ?? ""];
//   const { cartItems, addToCart, updateQuantity, cartTotal } = useCart();

//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   if (!service) return <div className="p-6">Service not found</div>;

//   const filteredPackages = selectedCategory
//     ? service.packages.filter((p) =>
//         p.title.toLowerCase().includes(selectedCategory.toLowerCase())
//       )
//     : service.packages;

//   const handleAddToCart = (pack: PackageType) => {
//     const numericPrice = parseFloat(pack.price.replace("\u20b9", ""));
//     addToCart({
//       title: pack.title,
//       price: numericPrice,
//       quantity: 1,
//     });
//   };

//   return (
//     <section className="max-w-[1280px] mx-auto px-4 py-10 relative">
//       <div className="flex gap-6">
//         <div className="w-[40%] bg-white border rounded-2xl p-4 shadow">
//           <input
//             type="text"
//             placeholder="Search for a service"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md"
//           />
//           <div className="grid grid-cols-3 gap-2">
//             {serviceItems.map((item, i) => (
//               <div
//                 key={i}
//                 onClick={() => setSelectedCategory(item.name)}
//                 className="flex flex-col items-center cursor-pointer hover:scale-105"
//               >
//                 <img src={item.icon} alt={item.name} className="w-[60px] h-[85px] mb-1" />
//                 <p className="text-[11px] text-center text-gray-700">{item.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="w-[60%] space-y-6 overflow-y-auto max-h-[85vh] pr-2">
//           <img src={service.banner} alt={service.name} className="w-full h-64 object-cover rounded-xl shadow-md" />

//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Packages {selectedCategory && `(Filtered: ${selectedCategory})`}
//           </h2>

//           {filteredPackages.map((pack, i) => (
//             <div key={i} className="bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-lg">
//               <div className="flex justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{pack.title}</h3>
//                 <span className="text-sm text-gray-600">{pack.duration}</span>
//               </div>
//               <p className="text-sm text-gray-600 mb-2">{pack.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-xl font-bold text-purple-600">{pack.price}</span>
//                 <button
//                   className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//                   onClick={() => handleAddToCart(pack)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="w-[30%] sticky top-10 h-fit">
//           <div className="bg-white border rounded-xl shadow p-4 mb-6">
//             <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
//             {cartItems.length === 0 ? (
//               <p className="text-sm text-gray-500">No items in your cart</p>
//             ) : (
//               <ul className="space-y-3">
//                 {cartItems.map((item, idx) => (
//                   <li key={idx} className="flex justify-between items-center">
//                     <div>
//                       <h4 className="text-sm font-medium">{item.title}</h4>
//                       <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button onClick={() => updateQuantity(item.title, -1)} className="px-2 py-1 bg-gray-200 rounded">−</button>
//                       <span className="text-sm">{item.quantity}</span>
//                       <button onClick={() => updateQuantity(item.title, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <div className="mt-4 text-right font-semibold text-purple-700">
//               Total: ₹{cartTotal.toFixed(2)}
//             </div>
//             {cartItems.length > 0 && (
//               <button
//                 onClick={() => navigate("/cart")}
//                 className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//               >
//                 View Full Cart
//               </button>
//             )}
//           </div>

//           <div className="bg-purple-50 border border-purple-200 rounded-xl shadow p-4">
//             <h3 className="text-lg font-semibold text-purple-700 mb-2">UC Promise</h3>
//             <ul className="text-sm text-gray-700 list-disc list-inside">
//               <li>4.5+ Rated Beauticians</li>
//               <li>Luxury Salon Experience</li>
//               <li>Premium Branded Products</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {cartItems.length > 0 && (
//         <div
//           className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer"
//           onClick={() => navigate("/cart")}
//         >
//           View Cart • ₹{cartTotal.toFixed(2)}
//         </div>
//       )}
//     </section>
//   );
// }
// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "../contexts/CartContext";
// import { servicesData } from "../data/servicesData";
// import type { PackageType } from "../data/servicesData";

// export default function ServiceDetailPage() {
//   const { serviceSlug } = useParams();
//   const navigate = useNavigate();
//   const service = servicesData[serviceSlug ?? ""];
//   const { cartItems, addToCart, updateQuantity, cartTotal } = useCart();

//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   if (!service) return <div className="p-6">Service not found</div>;

//   const filteredPackages = selectedCategory
//     ? service.packages.filter((p) =>
//         p.title.toLowerCase().includes(selectedCategory.toLowerCase())
//       )
//     : service.packages;

//   const handleAddToCart = (pack: PackageType) => {
//     const numericPrice = parseFloat(pack.price.replace("\u20b9", ""));
//     addToCart({
//       title: pack.title,
//       price: numericPrice,
//       quantity: 1,
//     });
//   };

//   return (
//     <section className="max-w-[1280px] mx-auto px-4 py-10 relative">
//       <div className="flex gap-6">
//         <div className="w-[40%] bg-white border rounded-2xl p-4 shadow">
//           <input
//             type="text"
//             placeholder="Search for a service"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md"
//           />
//           <div className="grid grid-cols-3 gap-2">
//             {(service.serviceItems ?? []).map((item, i) => (
//               <div
//                 key={i}
//                 onClick={() => setSelectedCategory(item.name)}
//                 className="flex flex-col items-center cursor-pointer hover:scale-105"
//               >
//                 <img src={item.icon} alt={item.name} className="w-[60px] h-[85px] mb-1" />
//                 <p className="text-[11px] text-center text-gray-700">{item.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="w-[60%] space-y-6 overflow-y-auto max-h-[85vh] pr-2">
//           <img src={service.banner} alt={service.name} className="w-full h-64 object-cover rounded-xl shadow-md" />

//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Packages {selectedCategory && `(Filtered: ${selectedCategory})`}
//           </h2>

//           {filteredPackages.map((pack, i) => (
//             <div key={i} className="bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-lg">
//               <div className="flex justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{pack.title}</h3>
//                 <span className="text-sm text-gray-600">{pack.duration}</span>
//               </div>
//               <p className="text-sm text-gray-600 mb-2">{pack.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-xl font-bold text-purple-600">{pack.price}</span>
//                 <button
//                   className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//                   onClick={() => handleAddToCart(pack)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="w-[30%] sticky top-10 h-fit">
//           <div className="bg-white border rounded-xl shadow p-4 mb-6">
//             <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
//             {cartItems.length === 0 ? (
//               <p className="text-sm text-gray-500">No items in your cart</p>
//             ) : (
//               <ul className="space-y-3">
//                 {cartItems.map((item, idx) => (
//                   <li key={idx} className="flex justify-between items-center">
//                     <div>
//                       <h4 className="text-sm font-medium">{item.title}</h4>
//                       <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button onClick={() => updateQuantity(item.title, -1)} className="px-2 py-1 bg-gray-200 rounded">−</button>
//                       <span className="text-sm">{item.quantity}</span>
//                       <button onClick={() => updateQuantity(item.title, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <div className="mt-4 text-right font-semibold text-purple-700">
//               Total: ₹{cartTotal.toFixed(2)}
//             </div>
//             {cartItems.length > 0 && (
//               <button
//                 onClick={() => navigate("/cart")}
//                 className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//               >
//                 View Full Cart
//               </button>
//             )}
//           </div>

//           {service.promises && (
//             <div className="bg-purple-50 border border-purple-200 rounded-xl shadow p-4">
//               <h3 className="text-lg font-semibold text-purple-700 mb-2">UC Promise</h3>
//               <ul className="text-sm text-gray-700 list-disc list-inside">
//                 {service.promises.map((promise, idx) => (
//                   <li key={idx}>{promise}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       {cartItems.length > 0 && (
//         <div
//           className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer"
//           onClick={() => navigate("/cart")}
//         >
//           View Cart • ₹{cartTotal.toFixed(2)}
//         </div>
//       )}
//     </section>
//   );
// }

// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "../contexts/CartContext";
// import { servicesData } from "../data/servicesData";
// import type { PackageType } from "../data/servicesData";

// export default function ServiceDetailPage() {
//   const { serviceSlug } = useParams();
//   const navigate = useNavigate();
//   const service = servicesData[serviceSlug ?? ""];
//   const { cartItems, addToCart, updateQuantity, cartTotal } = useCart();

//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   if (!service) return <div className="p-6">Service not found</div>;

//   const filteredPackages = selectedCategory
//     ? service.packages.filter((p) =>
//         p.title.toLowerCase().includes(selectedCategory.toLowerCase())
//       )
//     : service.packages;

//   const handleAddToCart = (pack: PackageType) => {
//     const numericPrice = parseFloat(pack.price.replace("\u20b9", ""));
//     addToCart({
//       title: pack.title,
//       price: numericPrice,
//       quantity: 1,
//     });
//   };

//   return (
//     <section className="max-w-[1280px] mx-auto px-4 py-10 relative grid grid-cols-[250px_1fr_300px] gap-6">
//       {/* Left Sidebar - Service Items */}
//       <div className="bg-white border rounded-2xl p-4 shadow h-fit sticky top-10">
//         <input
//           type="text"
//           placeholder="Search for a service"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md"
//         />
//         <div className="grid grid-cols-3 gap-2">
//           {(service.serviceItems || []).map((item, i) => (
//             <div
//               key={i}
//               onClick={() => setSelectedCategory(item.name)}
//               className="flex flex-col items-center cursor-pointer hover:scale-105"
//             >
//               <img src={item.icon} alt={item.name} className="w-[60px] h-[85px] mb-1" />
//               <p className="text-[11px] text-center text-gray-700">{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Center - Banner + Scrollable Packages */}
//       <div className="flex flex-col max-h-[85vh] overflow-hidden">
//         <img
//           src={service.banner}
//           alt={service.name}
//           className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
//         />
//         <div className="flex-1 overflow-y-auto pr-2">
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Packages {selectedCategory && `(Filtered: ${selectedCategory})`}
//           </h2>
//           {filteredPackages.map((pack, i) => (
//             <div key={i} className="bg-gray-100 rounded-xl shadow-md p-4 mb-4 hover:shadow-lg">
//               <div className="flex justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{pack.title}</h3>
//                 <span className="text-sm text-gray-600">{pack.duration}</span>
//               </div>
//               <p className="text-sm text-gray-600 mb-2">{pack.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-xl font-bold text-purple-600">{pack.price}</span>
//                 <button
//                   className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//                   onClick={() => handleAddToCart(pack)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Sidebar - Cart + UC Promise */}
//       <div className="sticky top-10 h-fit space-y-6">
//         <div className="bg-white border rounded-xl shadow p-4">
//           <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
//           {cartItems.length === 0 ? (
//             <p className="text-sm text-gray-500">No items in your cart</p>
//           ) : (
//             <ul className="space-y-3">
//               {cartItems.map((item, idx) => (
//                 <li key={idx} className="flex justify-between items-center">
//                   <div>
//                     <h4 className="text-sm font-medium">{item.title}</h4>
//                     <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button onClick={() => updateQuantity(item.title, -1)} className="px-2 py-1 bg-gray-200 rounded">−</button>
//                     <span className="text-sm">{item.quantity}</span>
//                     <button onClick={() => updateQuantity(item.title, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div className="mt-4 text-right font-semibold text-purple-700">
//             Total: ₹{cartTotal.toFixed(2)}
//           </div>
//           {cartItems.length > 0 && (
//             <button
//               onClick={() => navigate("/cart")}
//               className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//             >
//               View Full Cart
//             </button>
//           )}
//         </div>

//         {service.promises && (
//           <div className="bg-purple-50 border border-purple-200 rounded-xl shadow p-4">
//             <h3 className="text-lg font-semibold text-purple-700 mb-2">UC Promise</h3>
//             <ul className="text-sm text-gray-700 list-disc list-inside">
//               {service.promises.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Mobile View Floating Cart */}
//       {cartItems.length > 0 && (
//         <div
//           className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer"
//           onClick={() => navigate("/cart")}
//         >
//           View Cart • ₹{cartTotal.toFixed(2)}
//         </div>
//       )}
//     </section>
//   );
// }

// import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useCart } from "../contexts/CartContext";
// import { servicesData } from "../data/servicesData";
// import type { PackageType } from "../data/servicesData";

// export default function ServiceDetailPage() {
//   const { serviceSlug } = useParams();
//   const navigate = useNavigate();
//   const service = servicesData[serviceSlug ?? ""];
//   const { cartItems, addToCart, updateQuantity, cartTotal } = useCart();

//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   if (!service) return <div className="p-6">Service not found</div>;

//   const filteredPackages = selectedCategory
//     ? service.packages.filter((p) =>
//         p.title.toLowerCase().includes(selectedCategory.toLowerCase())
//       )
//     : service.packages;

//   const handleAddToCart = (pack: PackageType) => {
//     const numericPrice = parseFloat(pack.price.replace("\u20b9", ""));
//     addToCart({
//       title: pack.title,
//       price: numericPrice,
//       quantity: 1,
//     });
//   };

//   return (
//   <section className="max-w-[1280px] mx-auto px-4 py-10 relative">
//     {/* Banner shown above the grid */}
//     <img
//       src={service.banner}
//       alt={service.name}
//       className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
//     />

//     <div className="grid grid-cols-[250px_1fr_300px] gap-6">
//       {/* Left Sidebar - Categories */}
//       <div className="bg-white border rounded-2xl p-4 shadow h-fit sticky top-10">
//         <input
//           type="text"
//           placeholder="Search for a service"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md"
//         />
//         <div className="grid grid-cols-3 gap-2">
//           {(service.serviceItems || []).map((item, i) => (
//             <div
//               key={i}
//               onClick={() => setSelectedCategory(item.name)}
//               className="flex flex-col items-center cursor-pointer hover:scale-105"
//             >
//               <img src={item.icon} alt={item.name} className="w-[60px] h-[85px] mb-1" />
//               <p className="text-[11px] text-center text-gray-700">{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Center Column - Scrollable Packages */}
//       <div className="flex flex-col max-h-[85vh] overflow-hidden">
//         <div className="flex-1 overflow-y-auto pr-2">
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Packages {selectedCategory && `(Filtered: ${selectedCategory})`}
//           </h2>
//           {filteredPackages.map((pack, i) => (
//             <div key={i} className="bg-gray-100 rounded-xl shadow-md p-4 mb-4 hover:shadow-lg">
//               <div className="flex justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{pack.title}</h3>
//                 <span className="text-sm text-gray-600">{pack.duration}</span>
//               </div>
//               <p className="text-sm text-gray-600 mb-2">{pack.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-xl font-bold text-purple-600">{pack.price}</span>
//                 <button
//                   className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//                   onClick={() => handleAddToCart(pack)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Sidebar - Cart & UC Promise */}
//       <div className="sticky top-10 h-fit space-y-6">
//         <div className="bg-white border rounded-xl shadow p-4">
//           <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
//           {cartItems.length === 0 ? (
//             <p className="text-sm text-gray-500">No items in your cart</p>
//           ) : (
//             <ul className="space-y-3">
//               {cartItems.map((item, idx) => (
//                 <li key={idx} className="flex justify-between items-center">
//                   <div>
//                     <h4 className="text-sm font-medium">{item.title}</h4>
//                     <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button onClick={() => updateQuantity(item.title, -1)} className="px-2 py-1 bg-gray-200 rounded">−</button>
//                     <span className="text-sm">{item.quantity}</span>
//                     <button onClick={() => updateQuantity(item.title, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div className="mt-4 text-right font-semibold text-purple-700">
//             Total: ₹{cartTotal.toFixed(2)}
//           </div>
//           {cartItems.length > 0 && (
//             <button
//               onClick={() => navigate("/cart")}
//               className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
//             >
//               View Full Cart
//             </button>
//           )}
//         </div>

//         {service.promises && (
//           <div className="bg-purple-50 border border-purple-200 rounded-xl shadow p-4">
//             <h3 className="text-lg font-semibold text-purple-700 mb-2">UC Promise</h3>
//             <ul className="text-sm text-gray-700 list-disc list-inside">
//               {service.promises.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Mobile Floating Cart Button */}
//       {cartItems.length > 0 && (
//         <div
//           className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer"
//           onClick={() => navigate("/cart")}
//         >
//           View Cart • ₹{cartTotal.toFixed(2)}
//         </div>
//       )}
//     </div>
//   </section>
// );
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { servicesData } from "../data/servicesData";
import type { PackageType } from "../data/servicesData";

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceSlug ?? ""];
  const { cartItems, addToCart, updateQuantity, cartTotal } = useCart();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (!service) return <div className="p-6">Service not found</div>;

  const filteredPackages = selectedCategory
    ? service.packages.filter((p) =>
        p.title.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : service.packages;

  const handleAddToCart = (pack: PackageType) => {
    const numericPrice = parseFloat(pack.price.replace("\u20b9", ""));
    addToCart({
      title: pack.title,
      price: numericPrice,
      quantity: 1,
    });
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 py-10">
      <div className="flex gap-6">
        {/* Left Sidebar - Categories */}
        <div className="w-[250px] bg-white border rounded-2xl p-4 shadow h-fit sticky top-10">
          <input
            type="text"
            placeholder="Search for a service"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-4 px-3 py-2 text-sm border border-gray-300 rounded-md"
          />
          <div className="grid grid-cols-3 gap-2">
            {(service.serviceItems || []).map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedCategory(item.name)}
                className="flex flex-col items-center cursor-pointer hover:scale-105"
              >
                <img src={item.icon} alt={item.name} className="w-[60px] h-[85px] mb-1" />
                <p className="text-[11px] text-center text-gray-700">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Banner then 2-column content */}
        <div className="flex-1">
          <img
            src={service.banner}
            alt={service.name}
            className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
          />

          <div className="grid grid-cols-[1fr_300px] gap-6">
            {/* Scrollable Packages */}
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Packages {selectedCategory && `(Filtered: ${selectedCategory})`}
              </h2>
              {filteredPackages.map((pack, i) => (
                <div key={i} className="bg-gray-100 rounded-xl shadow-md p-4 mb-4 hover:shadow-lg">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-lg font-semibold">{pack.title}</h3>
                    <span className="text-sm text-gray-600">{pack.duration}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{pack.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-purple-600">{pack.price}</span>
                    <button
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                      onClick={() => handleAddToCart(pack)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart + UC Promise */}
            <div className="space-y-6">
              <div className="bg-white border rounded-xl shadow p-4">
                <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
                {cartItems.length === 0 ? (
                  <p className="text-sm text-gray-500">No items in your cart</p>
                ) : (
                  <ul className="space-y-3">
                    {cartItems.map((item, idx) => (
                      <li key={idx} className="flex justify-between items-center">
                        <div>
                          <h4 className="text-sm font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQuantity(item.title, -1)} className="px-2 py-1 bg-gray-200 rounded">−</button>
                          <span className="text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.title, 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 text-right font-semibold text-purple-700">
                  Total: ₹{cartTotal.toFixed(2)}
                </div>
                {cartItems.length > 0 && (
                  <button
                    onClick={() => navigate("/cart")}
                    className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                  >
                    View Full Cart
                  </button>
                )}
              </div>

              {service.promises && (
                <div className="bg-purple-50 border border-purple-200 rounded-xl shadow p-4">
                  <h3 className="text-lg font-semibold text-purple-700 mb-2">UC Promise</h3>
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    {service.promises.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating Cart */}
      {cartItems.length > 0 && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          View Cart • ₹{cartTotal.toFixed(2)}
        </div>
      )}
    </section>
  );
}
