"use client";

import { useState, useEffect } from "react";

export function useScreenDetector() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    handleWindowSizeChange(); // run once on mount
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width;
}
