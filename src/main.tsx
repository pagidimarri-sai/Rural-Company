// File: src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./contexts/CartContext"; // ✅ Import the context
import "./index.css";
import "leaflet/dist/leaflet.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <CartProvider> {/* ✅ Wrap the App inside CartProvider */}
          <App />
        </CartProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}
