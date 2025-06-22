// import { useEffect, useState } from 'react';

// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import FeatureSection from './components/FeatureSection';
// import SplashScreen from './components/SplashScreen'; // ✅ import new component

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3500); // 3.5 seconds splash screen

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {isLoading ? (
//         <SplashScreen onFinish={() => setIsLoading(false)} />
//       ) : (
//         <>
//           <Header />
//           <HeroSection />
//           <FeatureSection />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

// src/App.tsx
import { useState } from "react";
import { BrowserRouter as  Routes, Route } from "react-router-dom";
import ServiceDetailPage from "./pages/ServiceDetailPage"; // adjust the path as needed

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import CartPage from "./pages/CartPage";
import BeautyPage from "./pages/BeautyPage";
import SplashScreen from "./components/SplashScreen";
import HowItWorks from "./components/HowItWorks";
import HomePage from "./pages/HomePage";

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
  <Route path="/home" element={<HomePage />} /> {/* ✅ ADD THIS LINE */}
  <Route path="/service/:serviceSlug" element={<ServiceDetailPage />} />

</Routes>
    </div>
  );
}
