"use client";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import {  useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsMounted from "@/shared/hooks/use-is-mounted";
import TextReveal from "@/shared/components/animation/TextReveal";
import Button from "@/shared/components/ui/Button";
import ChevronRightIcon from "@/shared/components/icons/ChevronRightIcon";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHeroSection() {
  const containerRef = useRef(null);
  const mm = gsap.matchMedia();
  const textRef = useRef(null);
  const isMounted = useIsMounted();

useGSAP(
  () => {
    mm.add("(min-width: 100px)", () => {
      const container = containerRef.current;
      const images = gsap.utils.toArray(".aboutImg");
      const text = textRef.current;

      // GPU optimization
      gsap.set([images, text], {
        willChange: "transform",
        force3D: true,
      });

      gsap.fromTo(
        images,
        {
          yPercent: (i) => 30 + i * 20,
        },
        {
          yPercent: -300,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "-10% top",
            end: "80%",
            scrub: 1.5, // smoother coupling
          },
        }
      );

      gsap.to(text, {
        yPercent: -200,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "70%",
          scrub: 1.5, // smoother coupling
        },
      });
    });
  },
  { scope: containerRef }
);


  return (
    <section
      ref={containerRef}
      className="relative min-h-[110svh] w-full overflow-clip bg-[#101010] md:h-[929px] xl:min-h-screen"
    >
      <LayoutWrapper>
        <div className="relative h-full w-full pt-[25px] md:pt-[56px] xl:pt-[28px]">
          <div ref={textRef} className="relative z-10  flex flex-col items-start gap-[16px] md:gap-[32px] xl:gap-[54px] ">
            <TextReveal animateOnScroll={false}>
              <h1 className="max-w-[343px] font-['Anton'] text-[48px] leading-[1.1] font-normal tracking-[0.5px] text-white uppercase md:max-w-[650px] md:text-[64px] xl:max-w-[1057px] xl:text-[124px]">
                We help brands to connect with new generations
              </h1>
            </TextReveal>
            <TextReveal animateOnScroll={false}>
            <p className="max-w-[455px] font-['Cabinet_Grotesk'] text-[16px] leading-[1.2] font-medium tracking-[0.5px] text-neutral-400">
              Ambitious brands lead with clarity, earn trust through
              authenticity, and connect with the people who matter most.
            </p>
            </TextReveal>
          </div>
          <div className="aboutImg absolute top-[400px] right-0 h-[156px] w-[209px]  md:h-[254px] md:w-[338px] xl:h-[390px] xl:w-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=1170&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 338px, (max-width: 1280px) 520px, 520px"
              priority
            />
          </div>
          <div className="aboutImg absolute top-[650px] left-0 h-[156px] w-[209px] md:h-[254px] md:w-[338px] xl:h-[390px] xl:w-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=1170&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 338px, (max-width: 1280px) 520px, 520px"
              priority
            />
          </div>
          <div className="aboutImg absolute top-[868px] right-0 h-[156px] w-[209px] md:h-[254px] md:w-[338px] xl:h-[390px] xl:w-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=1170&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 338px, (max-width: 1280px) 520px, 520px"
              priority
            />
          </div>
        </div>
        <Button className="absolute bottom-[20px] left-1/2 w-[343px] -translate-x-1/2 md:hidden">
          Start a project
          <ChevronRightIcon />
        </Button>
      </LayoutWrapper>
    </section>
  );
}
