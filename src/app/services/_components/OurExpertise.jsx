import Image from "next/image";

import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";

import { expertise } from "../_data/expertise";
import TextReveal from "@/shared/components/animation/TextReveal";

export default function OurExpertise() {
  return (
    <section className="py-8 md:py-21 xl:py-30">
      <LayoutWrapper>
        <div className="flex justify-between">
          <div className="flex flex-col gap-8 md:gap-12 xl:justify-between">
            <div className="flex flex-col gap-6">
              <TextReveal>
              <h2 className="text-h1-mobile md:text-h1-desktop font-anton w-full xl:max-w-[600px]">
                Branding Services That Build Meaningful Brands
              </h2>
              </TextReveal>
              <TextReveal>

              <p className="text-p3 md:text-p2 max-w-[600px] text-neutral-500">
                Our branding practice blends strategy, design, and storytelling
                to help organizations clarify who they are, what they stand for,
                and why they matter. From foundational identity to large-scale
                brand systems, every engagement is built to create long-term
                value, not short-term aesthetics.
              </p>
              </TextReveal>
            </div>
            <ul className="flex flex-col divide-y divide-black/10">
              {expertise.map((item) => (
                <li
                  key={item.number}
                  className="flex items-center gap-8 py-4 md:py-6"
                >
                  <span className="text-b5 font-bold text-neutral-500">
                    {item.number}
                  </span>
                  <h3 className="text-p4 md:text-b5 font-bold text-neutral-700">
                    {item.title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[800px] w-full max-w-[650px] max-xl:hidden">
            <Image
              src="https://images.unsplash.com/photo-1769292169556-2029133158ea?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our expertise"
              width={650}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
