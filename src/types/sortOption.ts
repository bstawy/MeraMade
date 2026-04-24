export const SORT_OPTIONS = {
  NEWEST: "newest",
  PRICE_LOW_TO_HIGH: "priceLowToHigh",
  PRICE_HIGH_TO_LOW: "priceHighToLow",
  RATING: "rating",
} as const;

/*  ─── Types ───  */
export type SortOptionValue = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];

export interface SortOption {
  id: string;
  value: string;
  name: {
    en: string;
    ar: string;
  };
}
