"use client";

import LgvBebasText from "@/features/news/components/LgvBebasText";
import Image from "next/image";

export function NotFoundPage() {
  return (
    <main className="min-w-full h-159 md:h-253.75 overflow-hidden mx-auto bg-black mt-28">
      <div className="relative mx-auto max-w-360 h-159 md:h-253.75">
        <Image
          src="/assets/images/not-found/png/notFoundBg.png"
          alt="Not Found"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-x-0 md:bottom-12 bottom-3 w-full max-w-[370px] md:max-w-[550px] flex flex-col mx-auto items-center text-center">
          <h1 className="font-display md:text-[40px] text-[32px] font-bold leading-[100%] text-[#FED403]">
            <LgvBebasText>{"გვერდი ვერ მოიძებნა"}</LgvBebasText>
          </h1>
          <p className="text-sm leading-4 text-white mt-4 font-light max-w-[370px]">
            როგორც ჩანს, ეს ეპიზოდი ეთერში არ გასულა. შეამოწმე ბმული ან დაბრუნდი
            მთავარ გვერდზე და გააგრძელე მოსმენა.
          </p>
        </div>
      </div>
    </main>
  );
}
