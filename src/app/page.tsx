import Hero from "@/components/pages/home/hero/Hero";
import Collections from "@/components/pages/home/collections/Collections";
import Manifesto from "@/components/pages/home/manifesto/Manifesto";

import styles from "./page.module.css";
import JoinSection from "@/components/pages/home/join-section/JoinSection";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Collections />
      <Manifesto />
      <JoinSection />
    </main>
  );
};

export default Home;
