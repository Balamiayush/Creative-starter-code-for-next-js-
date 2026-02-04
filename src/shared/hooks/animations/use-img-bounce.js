import { useEffect } from "react";

import { useScreenDetector } from "../use-screen-detector";

import { useLenisContext } from "@/store/lenis-context";
const useImgBounceAnim = ({
  imageRefs,
  minWidth = 1024,
  maxShrink = 0.15,
  velocityDivider = 20,
  transition = "transform 0.2s ease-out",
}) => {
  const lenis = useLenisContext();
  const width = useScreenDetector();

  useEffect(() => {
    if (width < minWidth) return;

    if (!lenis) return;

    const onScroll = ({ velocity }) => {
      const v = Math.min(Math.abs(velocity) / velocityDivider, 1);
      const scale = 1 - v * maxShrink;

      imageRefs.current.forEach((img) => {
        if (!img) return;
        img.style.transform = `scale(${scale})`;
        img.style.transition = transition;
      });
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [
    lenis,
    width,
    minWidth,
    maxShrink,
    velocityDivider,
    transition,
    imageRefs,
  ]);
};

export default useImgBounceAnim;
