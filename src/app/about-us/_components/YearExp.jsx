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
      if (!items || !containerRef.current) return;

      let mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
        },
        (context) => {
          let { isDesktop } = context.conditions;

          // 1. Calculate distance dynamically inside a function
          // This ensures that if the window resizes, GSAP gets fresh numbers
          const getScrollDistance = () => {
            return items.scrollHeight - items.parentElement.offsetHeight;
          };

          gsap.to(items, {
            y: () => -getScrollDistance(), // Use functional value
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "-10% top", // Start exactly when the top hits the top
              end: () => `+=${getScrollDistance() * (isDesktop ? 1.2 : 1.5)}`,
              scrub: 0.5, // Reduced from 1 to 0.5 for a "snappier", less lazy feel
              pin: true,
              // 2. Mobile pinning fix: 
              // prevents the "jumping" when mobile bars hide/show
              pinType: isDesktop ? "fixed" : "transform", 
              invalidateOnRefresh: true,
              anticipatePin: 1,
              // 3. Performance boost for mobile
              fastScrollEnd: true,
            },
          });
        }
      );
      
      return () => mm.revert(); // Cleanup
    },
    { scope: containerRef } // Scoping avoids selector leaks
  );
  return (
    <section
      ref={containerRef}
      className="relative z-[1] my-[32px] flex h-[500px] w-full justify-center overflow-hidden xl:h-[90vh] mb-[50px] lg:mb-0"
    >
      <div className="relative h-full w-[330px] overflow-hidden bg-[#CCE4FF] xl:h-[80vh] xl:w-[40vw]">
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
