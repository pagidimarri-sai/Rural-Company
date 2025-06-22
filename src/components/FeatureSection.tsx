import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import NewNoteworthySection from "./NewNoteworthySection";
import MostBookedServices from "./MostBookedServices";
import AdBanner from "./AdBanner";
import SalonForWomenSection from "./SalonForWomenSection";
import SpaForWomenSection from "./SpaForWomenSection";
import CleaningPestControlSection from "./CleaningPestControlSection";
import ApplianceRepair from "./ApplianceRepair";
import HomeRepair from "./HomeRepair";
import MassageForMen from "./MassageForMen";
import SalonForMenSection from "./SalonForMenSection";
import Footer from "./Footer";
import FeaturedProfessionals from "./FeaturedProfessionals";
import AdBanner1 from "./adBanner1";

const features = [
  { imageUrl: "/assets/ac.webp", link: "/services/ac-cleaning" },
  { imageUrl: "/assets/camera.webp", link: "/products/smart-camera" },
  { imageUrl: "/assets/expr.webp", link: "/offers/expert-services" },
  { imageUrl: "/assets/home.webp", link: "/home-services/repair" },
  { imageUrl: "/assets/native.webp", link: "/products/native-tech" },
  { imageUrl: "/assets/kitchen.webp", link: "/services/kitchen-cleaning" },
  { imageUrl: "/assets/women.webp", link: "/salon/women" },
  { imageUrl: "/assets/relax.webp", link: "/spa/relaxation" },
  { imageUrl: "/assets/camera.webp", link: "/products/smart-doorbell" },
];

export default function FeatureSection() {
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

  return (
    <>
      {/* Feature Cards Carousel */}
      <section className="bg-gray-100 py-10">
        <div className="relative max-w-[1280px] mx-auto px-6">
          {/* Left Arrow */}
          {scrollX > 0 && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
            >
              <FaChevronLeft />
            </button>
          )}

          {/* Right Arrow */}
          {scrollRef.current &&
            scrollX + scrollRef.current.clientWidth < scrollRef.current.scrollWidth && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
              >
                <FaChevronRight />
              </button>
            )}

          {/* Feature Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
            style={{
              width: `${CARD_WIDTH * 3 + GAP * 2}px`,
            }}
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[384px] h-[200px] rounded-xl overflow-hidden shadow bg-white"
              >
                <FeatureCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining Sections */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <NewNoteworthySection />
        </div>
      </div>

      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <MostBookedServices />

          <div className="mt-10">
            <AdBanner />
          </div>
          <div className="mt-10">
            <SalonForWomenSection />
          </div>
          <div className="mt-10">
            <SpaForWomenSection />
          </div>
          <div className="mt-10">
            <AdBanner1 />
          </div>
          <div className="mt-10">
            <CleaningPestControlSection />
          </div>
          <div className="mt-10">
            <AdBanner />
          </div>
          <div className="mt-10">
            <ApplianceRepair />
          </div>
          <div className="mt-10">
            <HomeRepair />
          </div>
          <div className="mt-10">
            <MassageForMen />
          </div>
          <div className="mt-10">
            <AdBanner />
          </div>
          <div className="mt-10">
            <SalonForMenSection />
          </div>
          <div className="mt-10">
            <FeaturedProfessionals/>
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
