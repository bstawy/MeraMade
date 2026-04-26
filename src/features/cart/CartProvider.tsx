"use client";

import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./cartTypes";
import { Product } from "@/types/product";

const STORAGE_KEY = "cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // 🔥 important

  // ✅ Load from localStorage (once)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // ✅ Save to localStorage (after load only)
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save cart", error);
    }
  }, [items, isLoaded]);

  // 🛒 Add
  const addToCart = (product: Product) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ❌ Remove
  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  // 🔄 Update qty
  const updateQuantity = (id: string, qty: number) => {
    if (qty < 1) return; // 🔥 prevent invalid state

    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: qty } : p)),
    );
  };

  // 🧹 Clear
  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
