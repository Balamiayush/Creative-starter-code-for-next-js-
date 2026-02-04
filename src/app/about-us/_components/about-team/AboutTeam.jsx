"use client";

import React, { useRef } from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import { ArrowUpRightIcon } from "@/shared/components/icons";
import { aboutTeamData } from "../../_data/about-team-data";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutTeam = () => {
  const containerRef = useRef(null);
  const scrollContentRef = useRef(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const scrollContent = scrollContentRef.current;

      if (!container || !scrollContent) return;

      const mm = gsap.matchMedia();
      const width = window.innerWidth;

      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray(scrollContent.children);

        const scrollWidth = scrollContent.scrollWidth - window.innerWidth;

        // MASTER timeline (single source of truth)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollWidth * 2}`,
            pin: true,
            scrub: 1.2, // slightly slower = smoother
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
  // 2️⃣ Vertical settle with subtle stagger (overlapping)
        tl.fromTo(
          cards,
          {
            y: (i) => i * 60,
          },
          {
            y: 0,
            ease: "power2.out",
            stagger: {
              each: 0.08,
              from: "start",
            },
            // duration: 0.,
          },
          0, // 👈 overlap timing (KEY)
        );
        // 1️⃣ Horizontal slide (smooth)
        tl.to(scrollContent, {
          xPercent:-50,
          ease: "none",
          duration: 1,
        },0);

      
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative xl:block hidden overflow-hidden bg-[#E6F1FA]"
    >
      <div className="flex min-h-screen flex-col justify-center py-[48px] md:py-[84px] xl:py-[120px]">
        {/* Header */}
        <LayoutWrapper>
          <div className="mb-[48px] flex flex-col gap-[12px]">
            <p className="font-cabinet text-p1 leading-[1.2] text-[#00000080]">
              The Prixa Digital
            </p>
            <h3 className="font-anton text-h1-desktop leading-[1.1] uppercase">
              Meet the Team
            </h3>
          </div>
        </LayoutWrapper>

        {/* Horizontal Scroll Content */}
        <LayoutWrapper>
          <div
            ref={scrollContentRef}
            className="flex w-max flex-nowrap gap-[52px]"
          >
            {aboutTeamData.map((item, index) => (
              <div
                key={index}
                className="flex w-[238px] shrink-0 flex-col items-center gap-[12px] md:w-[340px] xl:w-[436px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[300px] w-full object-cover md:h-[424px] xl:h-[450px] 2xl:h-[543px]"
                />

                <div className="flex w-full items-start justify-between">
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="font-anton text-[18px] uppercase md:text-[24px]">
                      {item.name}
                    </h3>
                    <p className="font-cabinet text-neutral-400">{item.role}</p>
                  </div>

                  <a
                    href={item.linkdin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[6px] text-neutral-700"
                  >
                    <span className="font-cabinet font-bold">LinkedIn</span>
                    <ArrowUpRightIcon className="h-[12px] w-[12px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
};

export default AboutTeam;
