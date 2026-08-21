"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const logos = [
  { src: "/assets/images/ilia-logo.svg", alt: "Partner 1" },
  { src: "/assets/images/ilia-logo.svg", alt: "Partner 2" },
  { src: "/assets/images/ilia-logo.svg", alt: "Partner 3" },
  { src: "/assets/images/ilia-logo.svg", alt: "Partner 4" },
  { src: "/assets/images/ilia-logo.svg", alt: "Partner 5" },
];

export default function LogoShape() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      className="relative w-full max-w-[476px] ms-auto lg:block hidden group"
      style={{ aspectRatio: "476 / 446" }}
    >
      {/* border shape */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 476 446"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M443.5 161.701H436.888C419.214 161.701 404.888 176.028 404.888 193.701V224V256.541C404.888 274.214 419.214 288.541 436.888 288.541H443.5C461.173 288.541 475.5 302.868 475.5 320.541V413.5C475.5 431.173 461.173 445.5 443.5 445.5H32.5C14.8269 445.5 0.5 431.173 0.5 413.5V223V32.5C0.5 14.8269 14.8269 0.5 32.5 0.5H443.5C461.173 0.5 475.5 14.8269 475.5 32.5V129.701C475.5 147.374 461.173 161.701 443.5 161.701Z"
          stroke="#481F6F"
        />
      </svg>

      {/* mic circle */}
      <div
        className="absolute z-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          width: "35px",
          height: "35px",
          left: "94%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#8A2BE2",
          filter: "blur(8px)",
        }}
      />

      {/* mic circle sitting in the notch */}
      <div
        className="absolute z-10 flex items-center justify-center"
        style={{
          width: "13%",
          aspectRatio: "1 / 1",
          left: "94%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Image
          src="/assets/images/icon/microphone_purple.svg"
          alt="microphone"
          width={60}
          height={60}
          className="w-[60px] h-[60px] object-fill group-hover:hidden"
        />
        <Image
          src="/assets/images/icon/microphone-glow.svg"
          alt="microphone"
          width={60}
          height={60}
          className="w-[60px] h-[60px] object-fill hidden group-hover:block"
        />
      </div>

      {/* content: carousel + dots */}
      <div className="relative h-full flex flex-col items-center justify-center px-12">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex items-center">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] flex items-center justify-center px-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="opacity-90 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 absolute bottom-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-6 bg-[#FED403]" : "w-2.5 bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
