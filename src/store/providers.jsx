"use client";

import { Fragment } from "react";

import { MantineProvider } from "@mantine/core";

import ContactDrawerContextProvider from "./contact-drawer-context";
import LenisContextProvider from "./lenis-context";

export default function Providers({ children }) {
  return (
    <Fragment>
      <LenisContextProvider>
        <MantineProvider withGlobalStyles>
          <ContactDrawerContextProvider>
            {children}
          </ContactDrawerContextProvider>
        </MantineProvider>
      </LenisContextProvider>
    </Fragment>
  );
}
