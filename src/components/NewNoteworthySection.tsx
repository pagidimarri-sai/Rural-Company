import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BOX_WIDTH = 230;
const GAP = 20;
const VISIBLE_CARDS = 5;

const noteworthyItems = [
  {
    imageUrl: "/assets/acf.jpg",
    link: "/featured/ac-clean",
    label: "AC Cleaning",
  },
  {
    imageUrl: "/assets/womenstudi.jpg",
    link: "/featured/women-salon",
    label: "Women's Studio",
  },
  {
    imageUrl: "/assets/laptop.jpg",
    link: "/featured/laptop-repair",
    label: "Laptop Repair",
  },
  {
    imageUrl: "/assets/native.jpeg",
    link: "/featured/native-solutions",
    label: "Native Solutions",
  },
  {
    imageUrl: "/assets/home painting.jpeg",
    link: "/featured/painting",
    label: "Home Painting",
  },
  {
    imageUrl: "/assets/smartlocks.webp",
    link: "/featured/smart-locks",
    label: "Smart Locks",
  },
  {
    imageUrl: "/assets/spa ayur.jpeg",
    link: "/featured/spa-ayurveda",
    label: "Spa & Ayurveda",
  },
  {
    imageUrl: "/assets/dishhh.jpg",
    link: "/featured/dish-installation",
    label: "Dish Installation",
  },
];

export default function NewNoteworthySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const maxScroll =
    (noteworthyItems.length - VISIBLE_CARDS) * (BOX_WIDTH + GAP);

  const scrollLeft = () => {
    const newScroll = Math.max(scrollX - (BOX_WIDTH + GAP) * VISIBLE_CARDS, 0);
    scrollRef.current?.scrollTo({ left: newScroll, behavior: "smooth" });
    setScrollX(newScroll);
  };

  const scrollRight = () => {
    const newScroll = Math.min(
      scrollX + (BOX_WIDTH + GAP) * VISIBLE_CARDS,
      maxScroll
    );
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
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          New and Noteworthy
        </h2>

        <div className="relative">
          {scrollX > 0 && (
            <button
              onClick={scrollLeft}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-sm"
            >
              <FaChevronLeft />
            </button>
          )}

          {scrollRef.current &&
            scrollX + scrollRef.current.clientWidth < scrollRef.current.scrollWidth && (
              <button
                onClick={scrollRight}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-sm"
              >
                <FaChevronRight />
              </button>
            )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar w-full"
          >
            {noteworthyItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <a
                  href={item.link}
                  className="w-[230px] h-[230px] flex-shrink-0 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </a>
                <p className="mt-2 text-sm font-medium text-gray-800 text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
