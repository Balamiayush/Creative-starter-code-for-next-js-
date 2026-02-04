"use client";

import { Drawer } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ContactForm from "../ContactForm";
import { CloseIcon } from "../icons";

import { useContactDrawer } from "@/store/contact-drawer-context";

export default function ContactDrawer() {
  const width = useMediaQuery("(min-width: 768px)");
  const { isOpened, closeDrawer } = useContactDrawer();

  return (
    <Drawer
      opened={isOpened}
      onClose={closeDrawer}
      withCloseButton={false}
      overlayProps={{
        blur: "10px",
      }}
      padding="0"
      classNames={{
        content: "bg-neutral-700!",
      }}
      position="right"
      offset={width ? 48 : 0}
      size="610px"
    >
      <div
        data-lenis-prevent
        className="text-neutral-0 text-c2 flex cursor-pointer items-center justify-end gap-1 px-8 pt-6"
        onClick={closeDrawer}
      >
        <CloseIcon />
        <span className="font-bold">Close</span>
      </div>
      <div className="w-full px-4 py-8 md:px-8 xl:py-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-anton text-b3 text-neutral-200 uppercase max-xl:max-w-[307px]">
            Let’s collaborate on what matters to you
          </h2>
          <p className="text-p2 max-w-[297px] text-neutral-200 md:max-w-[450px]">
            Contact us to discuss business opportunities, or just to say hello.
            Use the form below or send us an email at hello@prixa.com
          </p>
        </div>
      </div>
      <ContactForm />
    </Drawer>
  );
}
