import { works } from "./works";
import { services } from "./services";

export const navLinks = [
  {
    id: "work",
    title: "Work",
    href: "/work",
    label: works.length,
  },
  {
    id: "services",
    title: "Services",
    href: "/services",
    label: services.length,
  },
  {
    id: "about-us",
    title: "About Us",
    href: "/about-us",
    label: null,
  },
];
