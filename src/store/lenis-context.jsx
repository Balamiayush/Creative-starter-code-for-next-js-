"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
const LenisContext = createContext(null);

export default function LenisContextProvider({ children }) {
  const lenisRef = useRef(null);
  const [lenis, setLenis] = useState(null);
const pathname = usePathname();

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) return;

    const instance = new Lenis({
      smooth: true,
      lerp: 0.1,
      prevent: (node) =>
        node?.closest?.(
          "[data-lenis-prevent], .mantine-Drawer-root, .mantine-Modal-root",
        ),
    });

    lenisRef.current = instance;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(instance);

    let rafId;

    const raf = (time) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);
  
  useEffect(() => {
    if (!lenis) return;

    // Scroll to top immediately on route change
    lenis.scrollTo(0, {
      immediate: true,
      force: true,
    });
  }, [pathname, lenis]);


  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenisContext() {
  return useContext(LenisContext);
}
