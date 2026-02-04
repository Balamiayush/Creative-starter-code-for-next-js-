"use client";

import Image from "next/image";

import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import Button from "@/shared/components/ui/Button";
import ChevronRightIcon from "@/shared/components/icons/ChevronRightIcon";

import { useContactDrawer } from "@/store/contact-drawer-context";
import TextReveal from "@/shared/components/animation/TextReveal";

export default function ServicesHero() {
  const { openDrawer } = useContactDrawer();

  return (
    <section className="py-12 md:pt-[120px] md:pb-8">
      <LayoutWrapper>
        <div className="flex flex-col gap-6 xl:gap-21">
          <div className="flex flex-col gap-4 md:gap-6">
            <TextReveal>
              <h1 className="text-b2 md:text-b1 font-anton w-full max-w-[258px] uppercase md:max-w-[675px]">
                Branding and strategy
              </h1>
            </TextReveal>
            <TextReveal>
              <p className="text-p3 md:text-p2 text-neutral-600 md:max-w-[635px]">
                Branding defines how a business is seen, remembered, and
                trusted. It brings clarity to positioning, voice, and visual
                identity across every touchpoint. Strong branding creates
                consistency, builds confidence, and supports long-term value.
              </p>
            </TextReveal>
            <div>
              <Button onClick={openDrawer}>
                Let&apos;s work together <ChevronRightIcon />
              </Button>
            </div>
          </div>
          <div className="h-[230px] w-full md:h-[352px] xl:h-[672px]">
            <Image
              src="https://cdn.dribbble.com/userupload/15552211/file/original-a9c294c3be1f6fa3c60befd5c9d5e76f.png?resize=1024x731&vertical=center"
              alt="Branding and strategy illustration"
              width={300}
              height={230}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
