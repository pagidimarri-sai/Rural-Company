const homeRepairs = [
  {
    imageUrl: "/assets/fan repair.jpeg",
    title: "Fan Repair",
    link: "/home-repair/fan",
    price: "₹399",
    rating: "4.9 (125k)"
  },
  {
    imageUrl: "/assets/switch or socket replacement.webp",
    title: "Socket Replacement",
    link: "/home-repair/socket",
    price: "₹249",
    rating: "4.8 (98k)"
  },
  {
    imageUrl: "/assets/pipeline leakage repair.jpeg",
    title: "Pipeline Leakage",
    link: "/home-repair/pipeline",
    price: "₹499",
    rating: "4.7 (87k)"
  },
  {
    imageUrl: "/assets/wooden door repair.webp",
    title: "Wooden Door Repair",
    link: "/home-repair/door",
    price: "₹699",
    rating: "4.9 (143k)"
  },
  {
    imageUrl: "/assets/fan repair.jpeg",
    title: "Exhaust Fan Fix",
    link: "/home-repair/exhaust-fan",
    price: "₹299",
    rating: "4.6 (52k)"
  },
];

export default function HomeRepair() {
  return (
    <section className="bg-gray-100 pt-6 pb-14 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Home Repair & Installation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {homeRepairs.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group transition-transform transform hover:scale-105 text-center"
            >
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[230px] object-cover"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">{item.price} &bull; ⭐ {item.rating}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
