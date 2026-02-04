"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { digitalGrowthData } from "@/app/(landing-page)/_data/digital-growth";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const GallerySection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const mm = gsap.matchMedia();
      const cards = cardsRef.current || [];
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (!cards.length) return;

      // ------------------------------------
      // 1. Calculate initial left positions
      // ------------------------------------
      const multiplier =
        window.innerWidth >= 1024 ? 100 : window.innerWidth >= 768 ? 70 : 100; // mobile

      const lefts = cards.map((card) => {
        const { left, width } = card.getBoundingClientRect();
        return ((left + width / 2) / window.innerWidth) * multiplier;
      });
      // ------------------------------------
      // 2. Set base card styles (once)
      // ------------------------------------
      gsap.set(cards, {
        position: "absolute",
        bottom: isMobile ? "5%" : "0%", 
        left: "50%",
        xPercent: -50,
        yPercent: 20,
        transformStyle: "preserve-3d",
      });

      // ====================================
      // DESKTOP (>= 1024px)
      // ====================================
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        tl.to(cards, {
          rotation: (i) => (i - 2) * 10 + i * 4,
          duration: 0.2,
        })
          .to(
            cards,
            {
              rotationY: (i) => i * 10,
              duration: 0.2,
            },
            "<",
          )
          .to(
            cards,
            {
              left: (i) => `${lefts[i]}%`,
            },
            "-=0.1",
          )
          .to(cards, { marginLeft: (i) => `${i * 12}px` }, "-=0.1")
          .to(
            ".back-face",
            {
              rotationY: -180,
              stagger: 0.1,
              ease: "back.inOut",
            },
            "-=0.2",
          )
          .to(
            ".front-face",
            {
              rotationY: 0,
              stagger: 0.1,
              ease: "back.inOut",
            },
            "<",
          )
          .to(
            cards,
            {
              rotation: 0,
              rotationY: 0,
              stagger: 0.1,
            },
            "<",
          );

        tl.to(cards[0], { xPercent: -120, yPercent: -200 }, "a")
          .to(cards[1], { xPercent: -140, yPercent: 0 }, "a")
          .to(cards[2], { xPercent: 100, yPercent: -260 }, "b")
          .to(cards[3], { xPercent: 20, yPercent: -150 }, "b");
      });

      // ====================================
      // MOBILE & TABLET (< 1024px)
      // ====================================
      // ... inside your useGSAP hook

      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%", // Slightly longer end gives the scrub more breathing room
            scrub: 1.2, // Adding a small numeric value (1.2) smooths out jittery thumbs
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        // Optimize base state for GPU
        gsap.set(cards, { force3D: true, z: 0.1 });

        tl.to(cards, {
          rotation: (i) => (i - 2) * 6,
          // Use x instead of 'left' for better mobile performance
          x: (i) => (i - 1) * 20,
          duration: 0.4,
          ease: "power1.inOut",
        }).to(
          cards,
          {
            rotation: 0,
            stagger: 0.05,
            force3D: true, // Force GPU
          },
          "-=0.2",
        );

        // simplified movement for mobile to prevent lag
        tl.to(cards[0], { xPercent: -30, yPercent: -100, rotate: -5 }, "a")
          .to(cards[1], { xPercent: 80, yPercent: -180, rotate: 5 }, "a")
          .to(cards[2], { xPercent: -50, yPercent: -350, rotate: -2 }, "b")
          .to(cards[3], { xPercent: -120, yPercent: -120, rotate: 8 }, "b");
      });
      // ------------------------------------
      // Cleanup (VERY IMPORTANT)
      // ------------------------------------
      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="card-section relative flex h-[110svh] w-full items-center justify-center overflow-hidden bg-[#CEE4F6] xl:h-screen"
    >
      <h1 className="font-anton text-h1-mobile xl:text-b1 md:text-h1-tablet absolute top-1/2 left-1/2 max-w-[245px] -translate-x-1/2 -translate-y-1/2 text-center font-normal uppercase md:max-w-[265px] xl:max-w-[439px]">
        There’s work and there’s play
      </h1>
      {digitalGrowthData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="card h-[98px] w-[145px] shrink-0 border-8 border-white object-cover xl:h-[12vw] xl:w-[12vw]"
        >
          <Image
            width={0}
            height={0}
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};

export default GallerySection;
