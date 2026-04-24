export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  categoryId: string;
  price: number;
  createdAt: string;
  rating: number;
}
