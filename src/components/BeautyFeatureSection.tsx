// import { useRef, useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const features = [
//   { imageUrl: "/assets/1glow.webp", alt: "Glow Facial" },
//   { imageUrl: "/assets/2rel.webp", alt: "Relaxing Spa" },
//   { imageUrl: "/assets/3r.webp", alt: "Hair Care" },
//   { imageUrl: "/assets/4r.webp", alt: "Makeup Artist" },
//   { imageUrl: "/assets/5r.webp", alt: "Massage Therapy" },
// ];

// export default function BeautyFeatureSection() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [scrollX, setScrollX] = useState(0);

//   const CARD_WIDTH = 384; // EXACT to fit 3 cards + gaps in 1280px
//   const GAP = 24;
//   const SCROLL_AMOUNT = CARD_WIDTH * 3 + GAP * 2;

//   const scroll = (dir: "left" | "right") => {
//     const container = scrollRef.current;
//     if (!container) return;
//     const newScroll =
//       dir === "left"
//         ? Math.max(container.scrollLeft - SCROLL_AMOUNT, 0)
//         : Math.min(container.scrollLeft + SCROLL_AMOUNT, container.scrollWidth);
//     container.scrollTo({ left: newScroll, behavior: "smooth" });
//     setScrollX(newScroll);
//   };

//   useEffect(() => {
//     const el = scrollRef.current;
//     const onScroll = () => {
//       if (el) setScrollX(el.scrollLeft);
//     };
//     el?.addEventListener("scroll", onScroll);
//     return () => el?.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <section className="py-10 bg-gray-100">
//       <div className="relative max-w-[1280px] mx-auto px-6">
//         {/* Arrows */}
//         {scrollX > 0 && (
//           <button
//             onClick={() => scroll("left")}
//             className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
//           >
//             <FaChevronLeft />
//           </button>
//         )}
//         {scrollRef.current &&
//           scrollX + scrollRef.current.clientWidth < scrollRef.current.scrollWidth && (
//             <button
//               onClick={() => scroll("right")}
//               className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
//             >
//               <FaChevronRight />
//             </button>
//           )}

//         {/* Cards Row */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto no-scrollbar gap-6 scroll-smooth"
//         >
//           {features.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex-shrink-0 w-[384px] h-[180px] rounded-xl overflow-hidden shadow-md bg-white"
//             >
//               <img
//                 src={item.imageUrl}
//                 alt={item.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const features = [
  { imageUrl: "/assets/1glow.webp", alt: "Glow Facial" },
  { imageUrl: "/assets/2rel.webp", alt: "Relaxing Spa" },
  { imageUrl: "/assets/3r.webp", alt: "Hair Care" },
  { imageUrl: "/assets/4r.webp", alt: "Makeup Artist" },
  { imageUrl: "/assets/5r.webp", alt: "Massage Therapy" },
];

export default function BeautyFeatureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  const CARD_WIDTH = 384;
  const GAP = 24;
  const SCROLL_AMOUNT = CARD_WIDTH * 3 + GAP * 2;

  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const newScroll =
      dir === "left"
        ? Math.max(container.scrollLeft - SCROLL_AMOUNT, 0)
        : Math.min(container.scrollLeft + SCROLL_AMOUNT, container.scrollWidth);
    container.scrollTo({ left: newScroll, behavior: "smooth" });
    setScrollX(newScroll);
  };

  useEffect(() => {
    const el = scrollRef.current;
    const onScroll = () => {
      if (el) setScrollX(el.scrollLeft);
    };
    el?.addEventListener("scroll", onScroll);
    return () => el?.removeEventListener("scroll", onScroll);
  }, []);

  const showLeftArrow = scrollX > 0;
  const showRightArrow =
    scrollRef.current &&
    scrollX + scrollRef.current.clientWidth < scrollRef.current.scrollWidth;

  return (
    <section className="py-8 sm:py-10 bg-gray-100">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Arrows */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
          >
            <FaChevronLeft />
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
          >
            <FaChevronRight />
          </button>
        )}

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-4 sm:gap-6 scroll-smooth px-1 sm:px-0"
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[240px] sm:w-[300px] md:w-[384px] h-[160px] sm:h-[180px] rounded-xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
