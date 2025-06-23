
// import { useState } from "react";
// import { BrowserRouter as  Routes, Route } from "react-router-dom";
// import ServiceDetailPage from "./pages/ServiceDetailPage"; // adjust the path as needed

// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import FeatureSection from "./components/FeatureSection";
// import CartPage from "./pages/CartPage";
// import BeautyPage from "./pages/BeautyPage";
// import SplashScreen from "./components/SplashScreen";
// import HowItWorks from "./components/HowItWorks";
// import HomePage from "./pages/HomePage";

// export default function App() {
//   const [splashDone, setSplashDone] = useState(false);

//   if (!splashDone) {
//     return <SplashScreen onFinish={() => setSplashDone(true)} />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <Routes>
//   <Route
//     path="/"
//     element={
//       <>
//         <HeroSection />
//         <HowItWorks />
//         <FeatureSection />
//       </>
//     }
//   />
//   <Route path="/cart" element={<CartPage />} />
//   <Route path="/beauty" element={<BeautyPage />} />
//   <Route path="/home" element={<HomePage />} /> {/* ✅ ADD THIS LINE */}
//   <Route path="/service/:serviceSlug" element={<ServiceDetailPage />} />

// </Routes>
//     </div>
//   );
// }


// App.tsx
import { Routes, Route } from "react-router-dom"; // ✅ Only import Routes, not BrowserRouter
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import CartPage from "./pages/CartPage";
import BeautyPage from "./pages/BeautyPage";
import SplashScreen from "./components/SplashScreen";
import HowItWorks from "./components/HowItWorks";
import HomePage from "./pages/HomePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import { useState } from "react";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

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
    </div>
  );
}
