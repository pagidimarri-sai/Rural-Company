// import { Link } from "react-router-dom";

// function FeatureCard({ imageUrl, link }: { imageUrl: string; link: string }) {
//   return (
//     <Link to={link}>
//       <div className="w-[405px] h-[200px] rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow hover:shadow-lg flex-shrink-0">
//         <img
//           src={imageUrl}
//           alt="feature"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </Link>
//   );
// }

// export default FeatureCard;

import { Link } from "react-router-dom";

function FeatureCard({ imageUrl, link }: { imageUrl: string; link: string }) {
  return (
    <Link to={link}>
      <div className="w-[405px] h-[200px] rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow hover:shadow-lg flex-shrink-0">
        <img
          src={imageUrl}
          alt="feature"
          className="w-full h-full object-cover"
        />
      </div>
    </Link>
  );
}

export default FeatureCard;
