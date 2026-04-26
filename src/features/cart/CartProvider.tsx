"use client";

import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./cartTypes";
import { Product } from "@/types/product";
import { getCart, updateCart } from "./cart.service";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // 🔄 Load from JSON Server
  useEffect(() => {
    const loadCart = async () => {
      const data = await getCart();
      if (data?.items) setItems(data.items);
    };

    loadCart();
  }, []);

  // 🔥 Debounced sync
  useEffect(() => {
    const timeout = setTimeout(() => {
      updateCart(items);
    }, 400);

    return () => clearTimeout(timeout);
  }, [items]);

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

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: qty } : p)),
    );
  };

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
