import React from "react";
import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import Marquee from "react-fast-marquee";
export default function FeatureClients() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-[32px] bg-neutral-800  lg:gap-[48px] xl:h-[852px] py-12 md:py-21 xl:py-[120px] ">
      <LayoutWrapper>
        <h2 className="font-anton text-h1-mobile md:text-h1-tablet xl:text-h1-desktop leading-[1.1] font-normal tracking-[0.5px] text-white uppercase">
          Over 40+ brands, 2000 projects
        </h2>
      </LayoutWrapper>
      <Marquee>
        <div className="marqueContainer flex  w-full items-center justify-center overflow-hidden">
          <div className="marqueContainer__inner ml-[32px] flex gap-[32px]">
            <img
              src="https://plus.unsplash.com/premium_photo-1764599124118-f9c7f2bce4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="h-[227px] w-[284px] object-cover"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1764599124118-f9c7f2bce4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="h-[227px] w-[284px] object-cover"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1764599124118-f9c7f2bce4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="h-[227px] w-[284px] object-cover"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1764599124118-f9c7f2bce4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="h-[227px] w-[284px] object-cover"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1764599124118-f9c7f2bce4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="h-[227px] w-[284px] object-cover"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1764599124118-f9c7f2bce4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="h-[227px] w-[284px] object-cover"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1764599124118-f9c7f2bce4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="h-[227px] w-[284px] object-cover"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1764599124118-f9c7f2bce4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="h-[227px] w-[284px] object-cover"
              alt=""
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1764599124118-f9c7f2bce4b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              className="h-[227px] w-[284px] object-cover"
              alt=""
            />
          </div>
        </div>
      </Marquee>
      <LayoutWrapper className="flex w-full flex-col gap-[16px]">
        <h3 className="font-anton text-b6 text-white uppercase lg:text-[24px]">
          Feature Clients
        </h3>
        <p className="lg:text-p2 text-p3 text-neutral-500">
          Fashion - AUDEMARS PIGUET / BURBERRY / BVLGARI / CALVIN KLEIN /
          CHAUMET / CHRISTIAN DIOR / CHRISTIAN LOUBOUTIN / COACH / DIESEL / ELGC
          / FENDI / GIVENCHY / GUCCI / JIMMY CHOO / KENZO / KOSE / LOUIS VUITTON
          / MARC JACOBS / MICHAEL KORS / MIUMIU / PAUL SMITH / PRADA / SAINT
          LAURENT / SALVATORE FERRAGAMO / SWATCH / TAG HEUER / TIFFANY&CO /
          TOD’S / TOMMY HILFIGER / VALENTINO / VERSACE
        </p>
      </LayoutWrapper>
    </section>
  );
}
