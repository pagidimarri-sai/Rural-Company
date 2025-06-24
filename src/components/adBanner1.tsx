
// export default function AdBanner() {
//   return (
//     <section className="bg-gray-100 pt-6 pb-14 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="w-full rounded-4xl overflow-hidden shadow-md border border-gray-300">
//           <img
//             src="/assets/ad-banner2.png" // ✅ Use public path directly
//             alt="Advertisement Banner"
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

export default function AdBanner() {
  return (
    <section className="bg-gray-100 pt-6 md:pt-8 pb-10 md:pb-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="w-full rounded-2xl overflow-hidden shadow-md border border-gray-300">
          <img
            src="/assets/ad-banner2.png"
            alt="Advertisement Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}