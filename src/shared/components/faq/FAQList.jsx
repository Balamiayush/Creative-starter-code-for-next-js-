import LayoutWrapper from "../layouts/wrapper/LayoutWrapper";

import FAQItem from "./FAQItem";

import { faqs } from "@/shared/data/faqs";

export default function FAQList() {
  return (
    <section className="py-8">
      <LayoutWrapper>
        <div className="flex flex-col items-center justify-center gap-12">
          <h2 className="text-h1-mobile md:text-h1-tablet xl:text-h1-desktop font-anton text-center text-neutral-700 uppercase xl:max-w-[370px]">
            Frequently asked questions
          </h2>
          <ul className="flex w-full flex-col gap-4 xl:mx-auto xl:max-w-[855px]">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} {...faq} />
            ))}
          </ul>
        </div>
      </LayoutWrapper>
    </section>
  );
}
