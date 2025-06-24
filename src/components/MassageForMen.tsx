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
    <section className="bg-gray-100 pt-12 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
          Massage for Men
        </h2>

        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {massageItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="w-full sm:w-[250px] flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.label}
                className="w-full h-[250px] object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
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
