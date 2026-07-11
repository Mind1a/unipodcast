import Image from "next/image";
import LogoShape from "./Carousel";
import LgvBebasText from "@/features/news/components/LgvBebasText";

export default function HeroSection() {
  return (
    <section className="bg-[#0F011D] max-w-300 w-full px-4 py-4 mx-auto overflow-hidden pt-50">
      <div className="">
        <h2 className="text-white font-display text-[20px] md:text-[32px] lg:text-[61px] font-bold leading-snug mb-10">
          <LgvBebasText>სივრცე სადაც</LgvBebasText>
          <Image
            src={"/assets/images/hero-sentence-logo-1.svg"}
            alt="microphone"
            width={40}
            height={40}
            className="inline-block align-middle mx-2.5"
          />
          <LgvBebasText>ცოდნა, ინსპირაცია და</LgvBebasText>
          <Image
            src={"/assets/images/hero-sentence-logo-2.svg"}
            alt="microphone"
            width={126}
            height={35}
            className="inline-block align-middle mx-2.5"
          />
          <LgvBebasText>სტუდენტური ცხოვრება ერთ ხმად ერთიანდება</LgvBebasText>
        </h2>
        {/* LEFT */}
        <div className="flex gap-8">
          <div className="relative w-full rounded-3xl overflow-hidden bg-gray-800 aspect-733/445">
            <div className="relative aspect-video w-full h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  aria-label="Play video"
                  className="relative z-10 w-16 h-16 rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/40 transition"
                >
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-white ml-1" />
                </button>
              </div>
            </div>
          </div>
          <LogoShape />
        </div>

        {/* RIGHT */}
      </div>
    </section>
  );
}
