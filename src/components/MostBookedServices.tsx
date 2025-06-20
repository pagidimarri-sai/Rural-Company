import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BOX_WIDTH = 230;
const GAP = 20;
const VISIBLE_CARDS = 5;

const bookedServices = [
  {
    imageUrl: "/assets/painting%20partners.webp",
    link: "/services/painting-partners",
    label: "Painting Partners",
    price: "₹1,499",
    rating: "4.8 (102k)",
  },
  {
    imageUrl: "/assets/top%20load%20checkup.png",
    link: "/services/top-load-checkup",
    label: "Top Load Checkup",
    price: "₹299",
    rating: "4.9 (98k)",
  },
  {
    imageUrl: "/assets/tap%20repair.webp",
    link: "/services/tap-repair",
    label: "Tap Repair",
    price: "₹199",
    rating: "4.7 (85k)",
  },
  {
    imageUrl: "/assets/intense%20cleaning.webp",
    link: "/services/intense-cleaning",
    label: "Intense Cleaning",
    price: "₹999",
    rating: "4.9 (112k)",
  },
  {
    imageUrl: "/assets/pest%20control.jpeg",
    link: "/services/pest-control",
    label: "Pest Control",
    price: "₹799",
    rating: "4.8 (93k)",
  },
  {
    imageUrl: "/assets/foam%20jet%20ac%20service.webp",
    link: "/services/ac-foam-jet",
    label: "Foam Jet AC Service",
    price: "₹649",
    rating: "4.9 (147k)",
  },
  {
    imageUrl: "/assets/apartment%20termite%20control.webp",
    link: "/services/termite-control",
    label: "Termite Control",
    price: "₹1,299",
    rating: "4.8 (73k)",
  },
  {
    imageUrl: "/assets/apartment%20pest%20control.jpeg",
    link: "/services/apartment-pest-control",
    label: "Apartment Pest Control",
    price: "₹899",
    rating: "4.9 (134k)",
  },
  {
    imageUrl: "/assets/intense%20cleaning.webp",
    link: "/services/intense-cleaning-2",
    label: "Full Home Deep Clean",
    price: "₹1,599",
    rating: "5.0 (88k)",
  },
  {
    imageUrl: "/assets/pest%20control.jpeg",
    link: "/services/pest-control-2",
    label: "Anti-Roach Spray",
    price: "₹399",
    rating: "4.7 (120k)",
  },
];

export default function MostBookedServices() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const maxScroll = (bookedServices.length - VISIBLE_CARDS) * (BOX_WIDTH + GAP);

  const scrollLeft = () => {
    const newScroll = Math.max(scrollX - (BOX_WIDTH + GAP) * VISIBLE_CARDS, 0);
    scrollRef.current?.scrollTo({ left: newScroll, behavior: "smooth" });
    setScrollX(newScroll);
  };

  const scrollRight = () => {
    const newScroll = Math.min(scrollX + (BOX_WIDTH + GAP) * VISIBLE_CARDS, maxScroll);
    scrollRef.current?.scrollTo({ left: newScroll, behavior: "smooth" });
    setScrollX(newScroll);
  };

  useEffect(() => {
    const el = scrollRef.current;
    const handle = () => {
      if (el) setScrollX(el.scrollLeft);
    };
    el?.addEventListener("scroll", handle);
    return () => el?.removeEventListener("scroll", handle);
  }, []);

  return (
    <section className="bg-gray-100 pt-8 pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Most Booked Services</h2>

        <div className="relative">
          {scrollX > 0 && (
            <button
              onClick={scrollLeft}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
            >
              <FaChevronLeft />
            </button>
          )}

          {scrollRef.current &&
            scrollX + scrollRef.current.clientWidth < scrollRef.current.scrollWidth && (
              <button
                onClick={scrollRight}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
              >
                <FaChevronRight />
              </button>
            )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar w-full"
          >
            {bookedServices.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <a
                  href={item.link}
                  className="w-[230px] h-[230px] flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </a>
                <p className="mt-2 text-sm font-semibold text-gray-800 text-center">
                  {item.label}
                </p>
                <p className="text-xs text-gray-600 text-center">{item.price}</p>
                <p className="text-xs text-yellow-600 font-medium text-center">{item.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
