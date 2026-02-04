"use client";

import { createContext, useState, useContext } from "react";

const ContactDrawerContext = createContext();

export default function ContactDrawerContextProvider({ children }) {
  const [isOpened, setIsOpened] = useState(false);

  const ctx = {
    isOpened,
    openDrawer() {
      setIsOpened(true);
    },
    closeDrawer() {
      setIsOpened(false);
    },
  };

  return (
    <ContactDrawerContext.Provider value={ctx}>
      {children}
    </ContactDrawerContext.Provider>
  );
}

export function useContactDrawer() {
  return useContext(ContactDrawerContext);
}
