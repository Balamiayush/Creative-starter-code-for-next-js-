import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import WorkGallerySection from "./_components/WorkGallerySection";
import TextReveal from "@/shared/components/animation/TextReveal";

export default function Work() {
  return (
    <main className="relative h-full w-full ">
      <LayoutWrapper>
        <div className="workContent flex w-full flex-col gap-[24px] py-[48px]  md:py-[120px] xl:py-[84px]">
          <TextReveal>
          <h1 className="font-anton text-[48px] leading-[110%] uppercase md:max-w-[464px] md:text-[64px] xl:max-w-[889px] xl:text-[124px]">
            The work we do, and the people we help
          </h1>
          </TextReveal>
          <div className="flex w-full md:items-end md:justify-end">
            <TextReveal>
            <p className="text-p2 max-w-[290px]">
              Ambitious brands lead with clarity, earn trust through
              authenticity, and connect with the people who matter most.
            </p>
            </TextReveal>
          </div>
        </div>
      </LayoutWrapper>
      <WorkGallerySection />
    </main>
  );
}
