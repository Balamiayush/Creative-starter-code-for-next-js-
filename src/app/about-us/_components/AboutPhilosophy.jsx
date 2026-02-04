"use client";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ourPhilosophy } from "@/shared/data";

gsap.registerPlugin(ScrollTrigger);

const AboutPhilosophy = () => {
  const containerRef = useRef(null);
  const listWrapperRef = useRef(null);
  const itemRefs = useRef([]);
useGSAP(
  () => {
    const items = itemRefs.current;
    if (!items.length) return;

    // 1. Slow down the scroll by increasing the 'end' distance
    // Multiplied by 2 or 3 to give the user more scrolling room
    const itemHeight = items[0].offsetHeight + 84;
    const totalScroll = itemHeight * (items.length); 

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 20%", // Start earlier
      end: `+=${totalScroll}`,
      scrub: 1, // Smooth out the catch-up speed
      pin: false, // Set to true if you want the section to stay fixed while items change
      
      onUpdate: (self) => {
        // Calculate the current active index
        const activeIndex = Math.round(self.progress * (items.length - 1));
        
        items.forEach((item, i) => {
          // 2. Use gsap.to instead of gsap.set for a smooth transition
          gsap.to(item, {
            color: i === activeIndex ? "#101010" : "#AAAAAA",
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto", // Prevents animation flickering
            
          });
        });
      },
      
      onLeave: () => {
        items.forEach((item) => gsap.to(item, { color: "#AAAAAA", duration: 0.4 }));
      },
      
      onEnterBack: () => {
        gsap.to(items[0], { color: "#101010", duration: 0.4 });
      },
    });
  },
  { scope: containerRef }
);

  return (
    <section ref={containerRef} className="w-full bg-neutral-100 xl:py-x[84px] py-[48px] ">
      <LayoutWrapper>
        <div className="flex w-full justify-center">
          <div ref={listWrapperRef} className="flex flex-col gap-[84px]">
            {ourPhilosophy.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className="scroll-anim flex w-full flex-col items-center gap-[24px] py-[48px]"
                style={{ color: "#AAAAAA" }}
              >
                <h1
                  className={`font-anton max-w-[290px] text-center text-[32px] leading-[1.1] font-normal uppercase md:text-[40px] xl:max-w-[407px] xl:text-[64px]`}
                >
                  {item.title}
                </h1>
                <p className="font-cabinet max-w-[417px] text-center text-[16px] leading-[1.2] font-medium tracking-[0.5px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default AboutPhilosophy;
