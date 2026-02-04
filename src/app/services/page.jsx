import ServicesHero from "./_components/ServicesHero";
import StrategicFoundation from "./_components/StrategicFoundation";
import OurExpertise from "./_components/OurExpertise";
import Approach from "./_components/Approach";
import FeaturedWork from "./_components/FeaturedWork";
import FAQList from "@/shared/components/faq/FAQList";

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <OurExpertise />
      <Approach />
      <StrategicFoundation />
      <FeaturedWork />
      <FAQList />
    </main>
  );
}
