import Image from "next/image";

import LayoutWrapper from "@/shared/components/layouts/wrapper/LayoutWrapper";
import BackButton from "../../../shared/components/ui/BackButton";

import { getWorkById } from "@/shared/utils/get-works";

export default async function WorkDetails({ params }) {
  const resolvedParams = await params;

  const workId = resolvedParams.slug;

  if (!workId) return;

  const work = getWorkById(workId);

  if (!work) return <div>No works found</div>;

  return (
    <section className="pt-8 pb-16 md:pb-48 xl:pb-80">
      <LayoutWrapper>
        <div className="flex flex-col justify-between max-xl:gap-4 xl:flex-row">
          <div className="flex h-full w-full flex-col gap-6 md:gap-8 xl:sticky xl:top-32 xl:max-w-[440px]">
            <BackButton />
            <div className="flex flex-col gap-8 md:gap-12">
              <div>
                <h1 className="text-b2 font-anton mb-4 text-neutral-800 uppercase">
                  {work.title}
                </h1>
                <p className="text-p2 w-full max-w-[440px] font-medium text-neutral-600">
                  {work.details?.description}
                </p>
              </div>
              <ul className="flex flex-col divide-y divide-black/10">
                {work.details?.attributes.map((attribute) => (
                  <li
                    key={attribute.label}
                    className="flex flex-col flex-wrap justify-between py-4 max-md:gap-4 md:flex-row md:items-center md:py-5"
                  >
                    <h3 className="text-p2 font-medium text-neutral-500">
                      {attribute.label}
                    </h3>
                    <p className="text-p2 font-medium">{attribute.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {work.details?.images.map((image) => (
              <div
                key={image.alt}
                className="h-[270px] w-full md:h-[555px] xl:h-[655px] xl:max-w-[830px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={830}
                  height={655}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
