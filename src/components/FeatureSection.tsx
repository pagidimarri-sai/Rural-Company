import { useRef, useState, useEffect } from "react";
import SalonForWomenSection from "./SalonForWomenSection";
import AdBanner from "./AdBanner";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import SpaForWomenSection from "./SpaForWomenSection";
import CleaningPestControlSection from "./CleaningPestControlSection";
import NewNoteworthySection from "./NewNoteworthySection";
import ApplianceRepair from "./ApplianceRepair";
import MassageForMen from './MassageForMen';
import MostBookedServices from "./MostBookedServices";
import HomeRepair from './HomeRepair';
import SalonForMenSection from './SalonForMenSection';
import Footer from "./Footer";
// Constants
const BOX_WIDTH = 405;
const GAP = 32;
const VISIBLE_CARDS = 3;

// Feature items
const features = [
  { imageUrl: "/src/assets/ac.webp", link: "/services/ac-cleaning" },
  { imageUrl: "/src/assets/camera.webp", link: "/products/smart-camera" },
  { imageUrl: "/src/assets/expr.webp", link: "/offers/expert-services" },
  { imageUrl: "/src/assets/home.webp", link: "/home-services/repair" },
  { imageUrl: "/src/assets/native.webp", link: "/products/native-tech" },
  { imageUrl: "/src/assets/kitchen.webp", link: "/services/kitchen-cleaning" },
  { imageUrl: "/src/assets/women.webp", link: "/salon/women" },
  { imageUrl: "/src/assets/relax.webp", link: "/spa/relaxation" },
  { imageUrl: "/src/assets/camera.webp", link: "/products/smart-doorbell" },
];

export default function FeatureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const maxScroll = (features.length - VISIBLE_CARDS) * (BOX_WIDTH + GAP);

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
    <>
      {/* Top Feature Cards Carousel */}
      <section className="bg-gray-100 py-10 px-6">
        <div className="relative max-w-7xl mx-auto">
          {scrollX > 0 && (
            <button
              onClick={scrollLeft}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
            >
              <FaChevronLeft />
            </button>
          )}

          {scrollX < maxScroll && (
            <button
              onClick={scrollRight}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow"
            >
              <FaChevronRight />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar"
            style={{ width: `${VISIBLE_CARDS * BOX_WIDTH + (VISIBLE_CARDS - 1) * GAP}px` }}
          >
            {features.map((item, index) => (
              <FeatureCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* New & Noteworthy Section */}
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <NewNoteworthySection />
        </div>
      </div>

      {/* Most Booked Services Section */}
      <div className="mt-20">
  <div className="max-w-7xl mx-auto px-6">
    <MostBookedServices />
    
    {/* Add spacing if needed */}
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
      <AdBanner />
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
      <Footer />
    </div>
  </div>
</div>

    </>
  );
}
