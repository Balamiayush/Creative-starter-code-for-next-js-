import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ work, isFull, priority, isEven, isMobileFull, index })

{
  console.log(index);
  return (
    <Link href={`/work/${work.id}`} className="group cursor-pointer">
      <div
        className={`relative overflow-hidden ${isFull ? "md:aspect-[16/9] md:w-full " : "aspect-[3/4] w-full"} ${isEven ? "h-[500px]" : ""} ${index % 3 === 0 ? "max-md:h-[200px]! " : ""} `}
      >
        <Image
          src={work.src}
          alt={work.title}
          fill
          priority={priority}
          sizes={isFull ? "100vw" : "50vw"}
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />

        {/* Labels exactly like the screenshot */}
        <div className="font-anton xl:text-h3 text-h1-mobile absolute top-4 left-4 text-white uppercase">
          {work.title || "E-SEWA"}
        </div>

        <div className="absolute bottom-4 left-4 flex h-[43px] w-[180px] rotate-0 items-center justify-center gap-[10px] bg-white/15 pt-[12px] pr-[16px] pb-[12px] pl-[16px] opacity-100 backdrop-blur-[32px]">
          <h3 className="text-p2 text-neutral-0">{work.title}</h3>
        </div>
      </div>
    </Link>
  );
}
