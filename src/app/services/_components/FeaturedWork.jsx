import WorkGallerySection from "@/app/work/_components/WorkGallerySection";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";

export default function FeaturedWork() {
  return (
    <section className="py-8 md:py-21 xl:py-30">
      <LayoutWrapper>
        
        <h2 className="text-h1-mobile md:text-h1-tablet xl:text-h1-desktop font-anton mb-12 uppercase xl:mb-21">
          Our featured work
        </h2>
      </LayoutWrapper>
      <WorkGallerySection />
    </section>
  );
}
