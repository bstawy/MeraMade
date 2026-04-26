import { CartItem } from "./cartTypes";

const BASE_URL = "http://localhost:3001/cart";

export const getCart = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const updateCart = async (items: CartItem[]) => {
  await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      items,
    }),
  });
};
