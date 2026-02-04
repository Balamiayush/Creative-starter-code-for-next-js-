"use client";
import { works } from "@/shared/data";
import WorkCard from "./WorkCard";
import useImgBounceAnim from "@/shared/hooks/animations/use-img-bounce";
import { useRef } from "react";

export default function WorkGallerySection() {
  const imageRefs = useRef([]);
  useImgBounceAnim({ imageRefs });

  return (
    <section className="w-full py-[16px] md:py-[32px] 2xl:py-[84px]">
      {/* The Grid Container */}
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2">
        {works.map((work, index) => {
          const isFull = index % 3 === 0;
          const isRightColumn = index % 3 === 2;
          const isEven = index % 2 === 0;
          const isMobileFull = index % 3 === 0;

          return (
            <div
              key={work.id}
              ref={(el) => (imageRefs.current[index] = el)}
              className={`relative object-cover ${isFull ? "md:col-span-2" : "md:col-span-1"} `}
            >
              <WorkCard
                work={work}
                isFull={isFull}
                isEven={isEven}
                priority={index === 0}
                isMobileFull={isMobileFull}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
