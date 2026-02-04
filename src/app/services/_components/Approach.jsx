import Image from "next/image";

import { twMerge } from "tailwind-merge";

import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";

import { approach } from "../_data/approach";
import TextReveal from "@/shared/components/animation/TextReveal";

export default function Approach() {
  return (
    <section className="bg-neutral-100 py-8 md:py-21 xl:py-30">
      <LayoutWrapper>
        <div className="flex flex-col justify-between max-xl:gap-12 xl:flex-row">
          <div className="flex h-full max-w-[625px] flex-col gap-8 xl:sticky xl:top-24">
            <div>
              <TextReveal>
              <h2 className="text-h1-mobile md:text-h1-tablet xl:text-h1-desktop font-anton mb-4 uppercase max-md:max-w-[240px] xl:max-w-[500px]">
                A framework that drives excellence
              </h2>
              </TextReveal>
              <TextReveal>
              <p className="text-p3 md:text-p2 max-w-[600px] font-medium text-neutral-800 xl:max-w-[528px]">
                Meaningful collaboration begins with understanding and evolves
                through intentional, future-proof choices. This fosters clarity,
                trust, and impactful results.
              </p>
              </TextReveal>
            </div>
            <div className="h-[323px] w-[486px] max-xl:hidden">
              <Image
                src="https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png"
                alt="Approach illustration"
                width={486}
                height={323}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <ul className="flex w-full max-w-[700px] flex-col gap-4">
            {approach.map((item) => (
              <li
                key={item.number}
                className={twMerge(
                  "bg-blue-0 sticky top-24 flex flex-col gap-1.5 px-4 py-6 md:gap-8 md:px-8 md:py-12",
                )}
              >
                <span className="text-b2 md:text-b1 font-anton text-blue-100">
                  {item.number}
                </span>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="flex flex-col gap-2 md:w-[415px]">
                    <h3 className="font-anton text-b4 md:text-b3 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-p2 w-full max-w-[326px] font-medium text-neutral-700">
                      {item.description}
                    </p>
                  </div>
                  <ul className="flex list-inside list-disc flex-col gap-2">
                    {item.areas.map((area) => (
                      <li
                        key={area}
                        className="text-p2 font-medium text-neutral-700"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </LayoutWrapper>
    </section>
  );
}
