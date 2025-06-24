import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import CartPage from "./pages/CartPage";
import BeautyPage from "./pages/BeautyPage";
import SplashScreen from "./components/SplashScreen";
import HowItWorks from "./components/HowItWorks";
import HomePage from "./pages/HomePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";
import SimpleLoginModal from "./components/SimpleLoginModal";
import MobileBottomNav from "./components/MobileBottomNav";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!splashDone) {
    return <SplashScreen onFinish={() => setSplashDone(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HowItWorks />
              <FeatureSection />
              <MobileBottomNav onAccountClick={() => setIsModalOpen(true)} />
            </>
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/service/:serviceSlug" element={<ServiceDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>

      <SimpleLoginModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onLoginSuccess={() => {
    setIsModalOpen(false);
  }}
      />
    </div>
  );
}
