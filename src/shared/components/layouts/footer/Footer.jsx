"use client";

import Image from "next/image";

import LayoutWrapper from "../wrapper/LayoutWrapper";
import { FooterDesktop, FooterTablet, FooterMobile } from "./";

import { useScreenDetector } from "@/shared/hooks/use-screen-detector";

export default function Footer() {
  const width = useScreenDetector();

  const date = new Date();
  const year = date.getFullYear();

  const videoSrc = "https://cdn.pixabay.com/video/2025/12/21/323513_large.mp4";
  return (
    <footer className="">
    
    </footer>
  );
}
