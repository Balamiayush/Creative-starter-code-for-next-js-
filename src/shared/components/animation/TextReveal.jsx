"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextReveal({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);
  const splitRefs = useRef([]);
  const lines = useRef([]);
  const resizeObserver = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const splitAndAnimate = async () => {
        await document.fonts.ready;

        // Cleanup old splits
        splitRefs.current.forEach((s) => s.revert());
        splitRefs.current = [];
        lines.current = [];

        const elements = containerRef.current.hasAttribute("data-copy-wrapper")
          ? Array.from(containerRef.current.children)
          : [containerRef.current];

        elements.forEach((el) => {
          const split = SplitText.create(el, {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
          });

          split.lines.forEach((line) => {
            line.style.display = "block";
            line.style.overflow = "visible";
          });

          splitRefs.current.push(split);
          lines.current.push(...split.lines);
        });

        gsap.set(lines.current, { yPercent: 100 });

        const animation = {
          yPercent: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay,
        };

        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animation,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              once: true,
              // markers: true,
              invalidateOnRefresh: true, // IMPORTANT
            },
          });
        } else {
          gsap.to(lines.current, animation);
        }

        ScrollTrigger.refresh();
      };

      splitAndAnimate();

      // 🔥 Resize handling (BEST way)
      resizeObserver.current = new ResizeObserver(() => {
        splitAndAnimate();
      });

      resizeObserver.current.observe(containerRef.current);

      return () => {
        resizeObserver.current?.disconnect();
        splitRefs.current.forEach((s) => s.revert());
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper>
      {children}
    </div>
  );
}
