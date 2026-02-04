"use client";

import { useState } from "react";

import { twMerge } from "tailwind-merge";

import { ArrowDownIcon } from "../icons";

export default function FAQItem({ question, answer }) {
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  function handleFAQToggle() {
    setIsFAQOpen(!isFAQOpen);
  }

  return (
    <li
      className="cursor-pointer bg-neutral-100 px-4 py-6 select-none md:px-8"
      onClick={handleFAQToggle}
    >
      <div className="flex justify-between gap-8">
        <h3 className="text-b5 md:text-b4 font-bold md:max-w-[585px] lg:max-w-[735px]">
          {question}
        </h3>
        {isFAQOpen ? (
          <ArrowDownIcon
            className={twMerge(
              `transition-transform duration-300 ease-in-out ${
                isFAQOpen ? "rotate-180" : "rotate-0"
              }`,
            )}
          />
        ) : (
          <ArrowDownIcon
            className={twMerge(
              "rotate-0 transition-transform duration-300 ease-in-out",
              isFAQOpen ? "rotate-180" : "rotate-0",
            )}
          />
        )}
      </div>
      <div
        className={twMerge(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isFAQOpen
            ? "mt-6 max-h-96 opacity-100 md:mt-3.5 md:max-h-52"
            : "max-h-0 opacity-0",
        )}
      >
        <p className="text-p2 font-medium text-neutral-600 md:max-w-[585px] lg:max-w-[735px]">
          {answer}
        </p>
      </div>
    </li>
  );
}
