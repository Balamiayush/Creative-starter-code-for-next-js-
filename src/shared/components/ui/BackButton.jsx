"use client";

import { useRouter } from "next/navigation";

import { ArrowLeftIcon } from "@/shared/components/icons";

export default function BackButton() {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer items-center gap-1.5"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon />
      <span className="text-c2 font-bold text-neutral-600">Back</span>
    </div>
  );
}
