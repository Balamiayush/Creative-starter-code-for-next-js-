import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import TextReveal from "@/shared/components/animation/TextReveal";

const OurStory = () => {
  const stats = [
    { id: 1, value: "80", label: "Projects completed to date across Asia" },
    { id: 2, value: "80", label: "Projects completed to date across Asia" },
    { id: 3, value: "80", label: "Projects completed to date across Asia" },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-21 xl:min-h-[957px] xl:py-[120px]">
      <LayoutWrapper>
        <div className="grid grid-cols-1 items-start gap-[24px] lg:grid-cols-2 lg:gap-[32px]">
          {/* Left Content */}
          <div className="flex flex-col gap-[24px]">
            <TextReveal>
              <h2 className="font-anton text-h1-mobile md:text-h1-tablet xl:text-h1-desktop max-w-md text-black uppercase">
                Where we started <br /> and our story
              </h2>
            </TextReveal>
            <TextReveal>
              <p className="text-p3 md:text-p2 max-w-[343px] text-gray-600 md:w-full">
                Prixa Digital was founded out of a passion for creativity and
                innovation in the digital space. This dynamic agency specializes
                in SEO, digital marketing, video production, and branding,
                seamlessly merging artistic vision with strategic insight.
              </p>
            </TextReveal>
          </div>

          {/* Right Content */}
          <div className="flex flex-col">
            {/* Image Placeholder - Replace src with your actual image path */}
            <div className="mb-10 w-full">
              <img
                src="https://images.unsplash.com/photo-1767170476039-e2bc8916684a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Team Story"
                className="h-auto w-full object-cover"
              />
            </div>

            {/* Stats List */}
            <div className="flex flex-col divide-y divide-black/10 ">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-16 py-8"
                >
                  <span className="text-b3 font-anton min-w-[60px] text-black">
                    {stat.value}
                  </span>
                  <p className="max-w-[180px] text-[16px] leading-snug font-medium text-gray-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default OurStory;
