"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YearExp = () => {
  const data = [
    {
      years: "15",
      title: "(Years of work)",
      desc: "working on cool projects in the company of talented people",
    },
    {
      years: "20",
      title: "(different niche projects)",
      desc: "but united by one common goal - to create truly new and breakthrough things",
    },
    {
      years: "15",
      title: "(Years of work)",
      desc: "working on cool projects in the company of talented people",
    },
  ];

  const containerRef = useRef(null);
  const itemsRef = useRef(null);

useGSAP(
  () => {
    const items = itemsRef.current;
    const container = containerRef.current;
    if (!items || !container) return;

    const mm = gsap.matchMedia();

    // ✅ Desktop only
    mm.add("(min-width: 1024px)", () => {
      const getScrollDistance = () =>
        items.scrollHeight - items.parentElement.offsetHeight;

      gsap.to(items, {
        y: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "-10% top",
          end: () => `+=${getScrollDistance() * 1.2}`,
          scrub: 0.5,
          pin: true,
          pinType: "fixed", // desktop only
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  },
  { scope: containerRef }
);

  return (
    <section
      ref={containerRef}
      className="relative z-[1] hidden xl:flex my-[32px] mb-[50px] h-[500px] w-full justify-center overflow-hidden lg:mb-0 xl:h-[90vh] "
    >
      <div className="relative h-full w-[330px] overflow-hidden bg-[#CCE4FF] md:w-[521px] xl:h-[80vh] xl:w-[40vw]">
        <div
          ref={itemsRef}
          className="flex flex-col items-center gap-[6rem] py-[84px] lg:gap-[10vw]"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex h-[163px] w-[266px] flex-col items-center justify-center gap-[16px] lg:gap-[24px] xl:h-[303px] xl:w-[350px]"
            >
              <h1 className="font-anton text-b1 lg:text-d1-tablet text-[#007AFF] uppercase">
                {item.years}
              </h1>
              <h2 className="font-anton text-[18px] text-nowrap text-[#007AFF] uppercase lg:text-[32px]">
                {item.title}
              </h2>
              <p className="font-cabinet text-p2 text-center text-[#414141] lg:text-[24px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YearExp;
