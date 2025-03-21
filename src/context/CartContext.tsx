"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { Toast } from "@/components/Toast";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  showToast: (message: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState("");

  // Load cart from localStorage safely
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cleanpro-cart");
      setCartItems(savedCart ? JSON.parse(savedCart) : []);
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
      setCartItems([]);
    }
  }, []);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cleanpro-cart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems]);

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000);
  }, []);

  const addToCart = useCallback(
    (product: Omit<CartItem, "quantity">) => {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          showToast(`${product.name} quantity updated!`);
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        showToast(`${product.name} added to cart!`);
        return [...prev, { ...product, quantity: 1 }];
      });
    },
    [showToast]
  );

  const removeFromCart = useCallback(
    (productId: number) => {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
      showToast("Item removed from cart!");
    },
    [showToast]
  );

  const updateQuantity = useCallback(
    (productId: number, quantity: number) => {
      if (quantity < 1) return;

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
      showToast("Quantity updated!");
    },
    [showToast]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
    showToast("Cart cleared!");
  }, [showToast]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        showToast,
      }}
    >
      {children}
      <Toast message={toastMessage} />
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
