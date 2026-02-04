import FooterContact from "../FooterContact";
import Button from "@/shared/components/ui/Button";
import { ArrowUpRightIcon } from "@/shared/components/icons";

import { useContactDrawer } from "@/store/contact-drawer-context";

export default function FooterMobile({ videoSrc }) {
  const { openDrawer } = useContactDrawer();

  return (
    <div className="flex flex-col gap-8">
      <p className="w-full max-w-[200px] text-neutral-400">
        <span className="text-neutral-200">Let&apos;s elevate </span>your
        brand&apos;s digital presence
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-6">
          <h1 className="text-d1-mobile font-anton text-neutral-100 uppercase">
            Prixa
          </h1>
          <video
            src={videoSrc}
            playsInline
            autoPlay
            muted
            loop
            className="h-[60px] w-full object-cover"
            poster="https://images.pexels.com/photos/4707700/pexels-photo-4707700.jpeg?_gl=1*1uscg10*_ga*MTg5Mzg3NzUzOS4xNzUyNzMzNDY2*_ga_8JE65Q40S6*czE3Njc3NjYwNzgkbzIkZzEkdDE3Njc3NjYxMDUkajMzJGwwJGgw"
          />
        </div>
        <div className="flex items-center gap-6">
          <Button size="large" className="w-full" onClick={openDrawer}>
            Get in Touch <ArrowUpRightIcon className="w-[10px]" />
          </Button>
          <h1 className="text-d1-mobile font-anton text-neutral-100 uppercase">
            Digital
          </h1>
        </div>
      </div>
      <FooterContact />
    </div>
  );
}
