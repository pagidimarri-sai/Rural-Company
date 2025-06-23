// src/contexts/CartContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export interface CartItem {
  title: string;
  price: number; // ✅ Stored as number only
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (title: string, delta: number) => void;
  removeFromCart: (title: string) => void;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    try {
      const parsed = JSON.parse(stored || "[]");
      return parsed.map((item: any) => ({
        ...item,
        price: typeof item.price === "number" ? item.price : parseFloat(item.price.toString().replace(/[^\d.]/g, "")) || 0,
      }));
    } catch {
      return [];
    }
  });

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

  const removeFromCart = (title: string) => {
    setCartItems((prev) => prev.filter((item) => item.title !== title));
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart, cartTotal }}
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
