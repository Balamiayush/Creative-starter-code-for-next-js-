import Image from "next/image";

import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";

import { strategicFoundations } from "../_data/strategic-foundations";
import TextReveal from "@/shared/components/animation/TextReveal";

export default function StrategicFoundation() {
  return (
    <section className="bg-neutral-100 py-8 md:py-21 xl:py-30">
      <LayoutWrapper>
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between">
          <div className="flex flex-col gap-12 xl:justify-between">
            <TextReveal>

            <h2 className="text-h1-mobile md:text-h1-tablet xl:text-h1-desktop font-anton max-w-[287px] uppercase md:max-w-[524px] xl:max-w-[645px]">
              A strategic foundation that moves your brand forward
            </h2>
            </TextReveal>

            <ul className="flex flex-col gap-6 divide-y divide-black/10">
              {strategicFoundations.map((strategicFoundation) => (
                <li
                key={strategicFoundation.id}
                className="flex flex-col gap-3.5 pb-6 xl:max-w-[540px]"
                >
                  <TextReveal >


                  <h3 className="text-b4 w-full max-w-[318px] font-bold text-neutral-700 md:max-w-[540px]">
                    {strategicFoundation.title}
                  </h3>
                  </TextReveal>
                  <TextReveal>
                  <p className="text-p3 md:text-p2 text-neutral-600">
                    {strategicFoundation.description}
                  </p>
                  </TextReveal>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[183px] w-[182px] md:h-[380px] md:w-[377px] xl:h-[579px] xl:w-[575px]">
            <Image
              src="https://cdn.dribbble.com/userupload/15552211/file/original-a9c294c3be1f6fa3c60befd5c9d5e76f.png?resize=1024x731&vertical=center"
              alt="Branding and strategy illustration"
              width={182}
              height={183}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
