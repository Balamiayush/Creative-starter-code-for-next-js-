import AboutHeroSection from "./_components/AboutHeroSection";
import FeatureClients from "./_components/FeatureClients";
import GallerySection from "@/shared/components/GallerySection";
import AboutMainTeam from "./_components/about-team/AboutMainTeam";
import YearMain from "./_components/year-exp/YearMain";
import OurStory from "./_components/OurStory";
import OurPhilosophy from "@/shared/components/OurPhilosophy";


export default function AboutUs() {
  return (
    <main>
      <AboutHeroSection />
      <OurStory />
      <AboutMainTeam />
      <FeatureClients />
      <OurPhilosophy />
      <YearMain />
      <GallerySection />
    </main>
  );
}
