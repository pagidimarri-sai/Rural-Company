// import { useEffect, useState } from 'react';

// // ✅ Use public asset path instead of import
// const typingWords = [
//   "Getting services ready...",
//   "Connecting professionals...",
//   "Preparing Rural Company...",
// ];

// export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
//   const [progress, setProgress] = useState(0);
//   const [typedText, setTypedText] = useState("");
//   const [wordIndex, setWordIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   // Typing animation effect
//   useEffect(() => {
//     const currentWord = typingWords[wordIndex];
//     const timeout = setTimeout(() => {
//       if (charIndex < currentWord.length) {
//         setTypedText((prev) => prev + currentWord[charIndex]);
//         setCharIndex((prev) => prev + 1);
//       } else {
//         setTimeout(() => {
//           setTypedText("");
//           setCharIndex(0);
//           setWordIndex((prev) => (prev + 1) % typingWords.length);
//         }, 1500);
//       }
//     }, 80);

//     return () => clearTimeout(timeout);
//   }, [charIndex, wordIndex]);

//   // Loading progress effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(onFinish, 400);
//           return 100;
//         }
//         return prev + 3;
//       });
//     }, 90);

//     return () => clearInterval(interval);
//   }, [onFinish]);

//   return (
//     <div className="fixed inset-0 bg-white z-[9999] flex flex-col justify-center items-center transition-all">
//       {/* Logo (from public folder) */}
//       <img
//         src="/assets/urban-logo.png"
//         alt="Rural Company"
//         className="w-32 h-32 mb-6 animate-pulse"
//       />

//       {/* Typing effect */}
//       <p className="text-gray-700 text-sm font-medium h-6 mb-4 tracking-wide">
//         {typedText}
//         <span className="animate-pulse">|</span>
//       </p>

//       {/* Loading bar */}
//       <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
//         <div
//           className="h-full bg-purple-600 transition-all duration-200 ease-in-out"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';

// ✅ Use public asset path instead of import
const typingWords = [
  "Getting services ready...",
  "Connecting professionals...",
  "Preparing Rural Company...",
];

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const timeout = setTimeout(() => {
      if (charIndex < currentWord.length) {
        setTypedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setTypedText("");
          setCharIndex(0);
          setWordIndex((prev) => (prev + 1) % typingWords.length);
        }, 1500);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  // Loading progress effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 400);
          return 100;
        }
        return prev + 3;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col justify-center items-center transition-all">
      {/* Logo (from public folder) */}
      <img
        src="/assets/urban-logo.png"
        alt="Rural Company"
        className="w-32 h-32 mb-6 animate-pulse"
      />

      {/* Typing effect */}
      <p className="text-gray-700 text-sm font-medium h-6 mb-4 tracking-wide">
        {typedText}
        <span className="animate-pulse">|</span>
      </p>

      {/* Loading bar */}
      <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-purple-600 transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
