import { SortOption } from "@/types/sortOption";

const sortOptionsList: SortOption[] = [
  {
    id: "1",
    value: "newest",
    name: {
      en: "Newest",
      ar: "الأحدث",
    },
  },
  {
    id: "2",
    value: "priceLowToHigh",
    name: {
      en: "Price: Low to High",
      ar: "السعر: من الأدنى إلى الأعلى",
    },
  },
  {
    id: "3",
    value: "priceHighToLow",
    name: {
      en: "Price: High to Low",
      ar: "السعر: من الأعلى إلى الأدنى",
    },
  },
  {
    id: "4",
    value: "rating",
    name: {
      en: "Rating",
      ar: "التقييم",
    },
  },
];

export default sortOptionsList;
