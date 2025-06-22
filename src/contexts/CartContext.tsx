// File: src/contexts/CartContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export interface CartItem {
  title: string;
  price: number; // ✅ Use number
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (title: string, delta: number) => void;
  applyPromoCode: (code: string) => boolean;
  cartTotal: number;
  discount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.find((ci) => ci.title === item.title);
      if (exists) {
        return prev.map((ci) =>
          ci.title === item.title
            ? { ...ci, quantity: ci.quantity + 1 }
            : ci
        );
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (title: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const applyPromoCode = (code: string): boolean => {
    const normalized = code.trim().toUpperCase();
    if (normalized === "WELCOME10") {
      setDiscount(10);
      return true;
    } else if (normalized === "SAVE50") {
      setDiscount(50);
      return true;
    }
    setDiscount(0);
    return false;
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ) - discount;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, applyPromoCode, cartTotal, discount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
