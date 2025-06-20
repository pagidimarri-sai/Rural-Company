const salonMenItems = [
  {
    imageUrl: "/assets/mens facial.png",
    label: "Men's Facial",
    link: "/salon/men-facial",
  },
  {
    imageUrl: "/assets/hair colou.webp",
    label: "Hair Coloring",
    link: "/salon/hair-color",
  },
  {
    imageUrl: "/assets/haircut.jpg",
    label: "Haircut",
    link: "/salon/haircut",
  },
  {
    imageUrl: "/assets/pedicure and manicure.jpg",
    label: "Pedicure & Manicure",
    link: "/salon/men-manicure-pedicure",
  },
];

export default function SalonForMenSection() {
  return (
    <section className="bg-gray-100 pt-12 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Salon for Men</h2>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {salonMenItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="block w-[250px] hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-[250px] rounded-xl overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={item.imageUrl}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </div>
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
