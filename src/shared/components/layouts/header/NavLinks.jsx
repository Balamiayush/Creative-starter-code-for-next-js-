"use client";

import Link from "next/link";

import { useRef } from "react";

import { twMerge } from "tailwind-merge";

import { navLinks } from "@/shared/data";
import { useScrambleText } from "@/shared/hooks/animations/use-scramble-text";

export default function NavLinks({ isWhiteBgNavbar, pathname }) {
  const titleRefs = useRef([]);

  const playScramble = useScrambleText();

  return (
    <ul className="flex items-center max-md:hidden">
      {navLinks.map((navLink, index) => {
        const isActive = pathname === navLink.href;
        return (
          <li key={navLink.id} className="flex items-center gap-3">
            <Link
              href={navLink.href}
              className="flex items-end gap-[3px] px-3"
              onMouseEnter={() => playScramble(titleRefs.current[index])}
            >
              <span
                ref={(el) => (titleRefs.current[index] = el)}
                className={twMerge(
                  "text-c2 font-bold transition-colors duration-300 ease-in-out",
                  isWhiteBgNavbar
                    ? isActive
                      ? "text-neutral-800"
                      : "text-neutral-400 hover:text-neutral-800"
                    : isActive
                      ? "text-neutral-200"
                      : "text-neutral-500 hover:text-neutral-200",
                )}
              >
                {navLink.title}
              </span>

              <span className="text-xs text-neutral-500">{navLink.label}</span>
            </Link>

            {index !== navLinks.length - 1 && (
              <span className="text-neutral-600">/</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
