// src/firebase.ts
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC0EqtYlN_EW0FlWhEHayeYLBVgxW9OdSU",
//   authDomain: "rural-company-19725.firebaseapp.com",
//   projectId: "rural-company-19725",
//   storageBucket: "rural-company-19725.appspot.com",
//   messagingSenderId: "222417798419",
//   appId: "1:222417798419:web:d52b1ab66c50194e2406e6",
//   measurementId: "G-ZXCJKS4TYS"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0EqtYlN_EW0FlWhEHayeYLBVgxW9OdSU",
  authDomain: "rural-company-19725.firebaseapp.com",
  projectId: "rural-company-19725",
  storageBucket: "rural-company-19725.appspot.com",
  messagingSenderId: "222417798419",
  appId: "1:222417798419:web:d52b1ab66c50194e2406e6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
