import { useEffect, useState } from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import SplashScreen from './components/SplashScreen'; // ✅ import new component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <HeroSection />
          <FeatureSection />
        </>
      )}
    </div>
  );
}

export default App;
