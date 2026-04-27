import PasteriesIcon from "@/assets/icons/pasteries_icon.svg";
import BreadIcon from "@/assets/icons/bread_icon.svg";
import StarIcon from "@/assets/icons/star_icon.svg";

import CollectionCard from "./CollectionCard";

import styles from "../Collections.module.css";

export interface Collection {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  description: string;
  icon: React.ReactNode;
  color: string;
}
const collectionsData: Collection[] = [
  {
    id: 1,
    name: {
      en: "Pastries",
      ar: "حلويات",
    },
    description:
      "Delicate layers, golden laminations, and the scent of French butter reimagined for the modern palate.",
    icon: <PasteriesIcon />,
    color: "var(--color-bg-raised-alt)",
  },
  {
    id: 2,
    name: { en: "Breads", ar: "خبز" },
    description:
      "From rustic country loaves to artisanal sourdoughs, each bread is a testament to the timeless craft of baking.",
    icon: <BreadIcon />,
    color: "var(--color-bg-raised)",
  },
  {
    id: 3,
    name: {
      en: "Specialties",
      ar: "تخصصات",
    },
    description:
      "Unique creations that blend tradition with innovation, offering a taste of the unexpected in every bite.",
    icon: <StarIcon />,
    color: "var(--color-bg-highlight)",
  },
];

const CollectionsGrid = () => {
  return (
    <div className={styles.collectionsGrid}>
      {collectionsData.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default CollectionsGrid;
