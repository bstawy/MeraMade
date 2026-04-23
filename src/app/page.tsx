import Hero from "@/components/pages/home/hero/Hero";
import Collections from "@/components/pages/home/collections/Collections";

import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Collections />
    </main>
  );
};

export default Home;
