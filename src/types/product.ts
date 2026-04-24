export interface Product {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  categoryId: number;
  price: number;
  createdAt: string;
  rating: number;
}
