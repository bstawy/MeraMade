import HomeHero from "@/pages/home/hero/HomeHero";
import Collections from "@/pages/home/collections/Collections";
import Manifesto from "@/pages/home/manifesto/Manifesto";
import JoinSection from "@/pages/home/join-section/JoinSection";

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <Collections />
      <Manifesto />
      <JoinSection />
    </main>
  );
};

export default HomePage;
