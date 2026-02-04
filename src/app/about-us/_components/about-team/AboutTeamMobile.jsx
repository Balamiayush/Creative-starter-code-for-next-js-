import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import { aboutTeamData } from "../../_data/about-team-data";
import { ArrowUpRightIcon } from "@/shared/components/icons";

export default function AboutTeamMobile() {
  return (
    <section className="relative block overflow-hidden bg-[#E6F1FA] xl:hidden">
      <div className="flex h-[540px] flex-col justify-center py-[48px] md:h-auto md:py-[84px] xl:py-[120px]">
        {/* Header */}
        <LayoutWrapper>
          <div className="mb-[48px] flex flex-col gap-[12px]">
            <p className="font-cabinet text-p2 leading-[1.2] text-[#00000080]">
              The Prixa Digital
            </p>
            <h3 className="font-anton md:text-h1-tablet text-h1-mobile leading-[1.1] uppercase">
              Meet the Team
            </h3>
          </div>
        </LayoutWrapper>

        {/* Horizontal Drag Slider */}
        <LayoutWrapper>
          <div className="scrollbar-hidden overflow-x-auto">
            <div className="flex w-max flex-nowrap gap-[52px] pr-[24px]">
              {aboutTeamData.map((item, index) => (
                <div
                  key={index}
                  className="flex w-[238px] shrink-0 flex-col items-center gap-[12px] md:w-[340px]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[238px] w-full object-cover md:h-[424px]"
                  />

                  <div className="flex w-full items-start justify-between">
                    <div className="flex flex-col gap-[8px]">
                      <h3 className="font-anton text-[18px] uppercase md:text-[24px]">
                        {item.name}
                      </h3>
                      <p className="font-cabinet text-neutral-400">
                        {item.role}
                      </p>
                    </div>

                    <a
                      href={item.linkdin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-[6px] text-neutral-700"
                    >
                      <span className="font-cabinet font-bold">LinkedIn</span>
                      <ArrowUpRightIcon className="h-[12px] w-[12px]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
