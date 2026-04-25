import HomeHero from "@/components/pages/home/hero/HomeHero";
import Collections from "@/components/pages/home/collections/Collections";
import Manifesto from "@/components/pages/home/manifesto/Manifesto";
import JoinSection from "@/components/pages/home/join-section/JoinSection";

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
