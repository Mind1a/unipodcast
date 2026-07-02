"use client";

import Link from "next/link";

export function NotFoundPage() {
  return (
    <main
      className="
        relative min-h-[100svh] min-w-full overflow-hidden
        bg-[#0b0714] bg-[url('/assets/images/not-found/png/notFoundBg.png')]
        bg-contain bg-center bg-no-repeat
        flex items-end justify-center
        [background-position:center_30%]
        sm:[background-position:center_35%]
        object-cover
      "
    ></main>
  );
}
