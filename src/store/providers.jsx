"use client";

import { Fragment } from "react";


import LenisContextProvider from "./lenis-context";

export default function Providers({ children }) {
  return (
    <Fragment>
      <LenisContextProvider>
        {children}
      </LenisContextProvider>
    </Fragment>
  );
}
