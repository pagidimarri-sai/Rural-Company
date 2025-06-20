const massageItems = [
  {
    imageUrl: "/assets/post workout.jpeg",
    label: "Post Workout Recovery",
    link: "/massage/post-workout-recovery",
  },
  {
    imageUrl: "/assets/stress relief m.jpg",
    label: "Stress Relief Massage",
    link: "/massage/stress-relief",
  },
  {
    imageUrl: "/assets/pain relief.jpg",
    label: "Pain Relief Therapy",
    link: "/massage/pain-relief",
  },
];

export default function MassageForMenSection() {
  return (
    <section className="bg-gray-100 pt-12 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Massage for Men</h2>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {massageItems.map((item, index) => (
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
