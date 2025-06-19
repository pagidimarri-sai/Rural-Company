// src/components/AdBanner.tsx

import adBanner from "../assets/ChatGPT Image Jun 19, 2025, 05_56_53 PM.png";

export default function AdBanner() {
  return (
    <section className="bg-gray-100 pt-6 pb-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full rounded-4xl overflow-hidden shadow-md border border-gray-300">
          <img
            src={adBanner}
            alt="Advertisement Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
