import Hero from "@/components/pages/home/hero/Hero";
import Collections from "@/components/pages/home/collections/Collections";
import Manifesto from "@/components/pages/home/manifesto/Manifesto";
import JoinSection from "@/components/pages/home/join-section/JoinSection";
import Footer from "@/components/pages/home/footer/Footer";

import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Collections />
      <Manifesto />
      <JoinSection />
      <Footer />
    </main>
  );
};

export default Home;
