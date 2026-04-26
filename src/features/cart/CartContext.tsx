"use client";

import { createContext } from "react";
import { CartItem } from "./cartTypes";
import { Product } from "@/types/product";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);
