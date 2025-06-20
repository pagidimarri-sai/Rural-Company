const salonItems = [
  {
    imageUrl: "/assets/threading and face waxing.jpg",
    label: "Threading & Face Waxing",
    link: "/salon/threading-face-waxing",
  },
  {
    imageUrl: "/assets/waxing.jpg",
    label: "Waxing",
    link: "/salon/waxing",
  },
  {
    imageUrl: "/assets/hair care.jpg",
    label: "Hair Care",
    link: "/salon/hair-care",
  },
  {
    imageUrl: "/assets/manicure.jpg",
    label: "Manicure",
    link: "/salon/manicure",
  },
  {
    imageUrl: "/assets/face cleanup.webp",
    label: "Face Cleanup",
    link: "/salon/face-cleanup",
  },
];

export default function SalonForWomenSection() {
  return (
    <section className="bg-gray-100 pt-10 pb-14 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Salon for Women</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {salonItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 block"
            >
              <img
                src={item.imageUrl}
                alt={item.label}
                className="w-full h-[230px] object-cover rounded-lg"
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
