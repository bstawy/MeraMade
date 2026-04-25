"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css";
import { Product } from "@/types/product";
import { Category } from "@/types/category";

const chunkProducts = (products: Product[], size: number) => {
  const chunks = [];
  for (let i = 0; i < products.length; i += size) {
    chunks.push(products.slice(i, i + size));
  }
  return chunks;
};

interface ProductsProps {
  products: Product[];
  categoryMap: Record<string, Category>;
  locale?: "en" | "ar";
}

const Products = ({ products, categoryMap, locale = "en" }: ProductsProps) => {
  const slides = chunkProducts(products, 2);
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // 👇 Swipe state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) next();
    else if (distance < -minSwipeDistance) prev();
  };

  return (
    <section>
      <div
        className={styles.carousel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((group, i) => (
            <div className={styles.slide} key={i}>
              {group.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  category={categoryMap[product.categoryId]}
                  index={i * 2 + index + 1}
                  locale={locale}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={prev}>←</button>
        <span>
          {String(current + 1).padStart(2, "0")} —{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
        <button onClick={next}>→</button>
      </div>
    </section>
  );
};

export default Products;
