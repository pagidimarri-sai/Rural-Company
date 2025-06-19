// src/components/SpaForWomenSection.tsx


const spaItems = [
  {
    imageUrl: "/src/assets/natural care.jpg",
    label: "Natural Care",
    link: "/spa/natural-care",
  },
  {
    imageUrl: "/src/assets/stress relief.jpg",
    label: "Stress Relief",
    link: "/spa/stress-relief",
  },
  {
    imageUrl: "/src/assets/neck pain.jpeg",
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
              className="relative w-[250px] h-[250px] rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 block"
            >
              {/* Glass-style label */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-md backdrop-blur-md bg-white/30 text-gray-900 text-sm font-semibold shadow-sm z-10">
                {item.label}
              </div>

              <img
                src={item.imageUrl}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
