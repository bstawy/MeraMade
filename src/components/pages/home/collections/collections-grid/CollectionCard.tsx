"use client";

import Button from "@/components/Button/Button";
import { type Collection } from "./CollectionsGrid";

import styles from "../Collections.module.css";
import { useLanguage } from "@/features/language/useLanguage";

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  const { t, locale } = useLanguage();

  const collectionName =
    locale === "en" ? collection.name.en : collection.name.ar;

  const isMainCollection = collection.id === 1;

  const cardStyle = {
    backgroundColor: collection.color,
    gridArea: `card-${collection.id}`,
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{collectionName}</h3>
        <span className={styles.cardIcon}>{collection.icon}</span>
      </div>
      <div className={styles.cardContent}>
        {isMainCollection && (
          <p className={styles.cardSubtitle}>{t("pastryDescription")}</p>
        )}
        <Button label={t("exploreCollection")} variant="text" size="sm" />
      </div>
    </div>
  );
};

export default CollectionCard;
