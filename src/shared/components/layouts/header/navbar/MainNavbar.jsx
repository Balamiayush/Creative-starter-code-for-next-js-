"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

import { twMerge } from "tailwind-merge";

import LayoutWrapper from "../../wrapper/LayoutWrapper";
import Button from "@/shared/components/ui/Button";
import NavLinks from "../NavLinks";
import {
  PrixaDigitalLogo,
  PrixaDigitalLogoDark,
  CalendarIcon,
  HamburgerMenuIcon,
} from "../../../icons";

const ROUTES = ["/work", "/services"];

export default function MainNavbar() {
  const pathname = usePathname();

  const isWhiteBgNavbar = ROUTES.some((route) => pathname.startsWith(route));

  return (
    <header
    >
      <LayoutWrapper>
    
      </LayoutWrapper>
    </header>
  );
}
