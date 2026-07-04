import Image from "next/image";
import LogoShape from "./Carousel";

function TapeStrip({
  color,
  position,
}: {
  color: string;
  position: "top" | "bottom";
}) {
  return (
    <div
      className={`absolute left-0 right-0 ${
        position === "top" ? "-top-3" : "-bottom-3"
      } h-6 flex items-center overflow-hidden ${
        position === "top" ? "-rotate-1" : "rotate-1"
      }`}
      style={{ backgroundColor: color }}
    >
      <div className="flex whitespace-nowrap animate-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="text-black text-xs font-bold px-4 flex items-center gap-1"
          >
            ᲣᲜᲘ ᲞᲝᲓᲙᲐᲡᲢᲘ 🎙
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-[#0F011D] py-20 px-6 overflow-hidden pt-50">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug mb-10">
            სივრცე სადაც
            <span className="inline-flex items-center gap-2 bg-[#7C3AED] text-white text-lg px-4 py-1.5 rounded-full align-middle">
              🎙 ᲮᲛᲐᲓᲘ
            </span>
            ცოდნა, ინსპირაცია და{" "}
            <span className="inline-flex items-center gap-2 bg-[#7C3AED] text-white text-lg px-4 py-1.5 rounded-full align-middle">
              🎙 ᲮᲛᲐᲓᲘ
            </span>
            სტუდენტური ცხოვრება ერთ ხმად ერთიანდება
          </h2>

          <div className="relative max-w-md rounded-3xl border-2 border-[#00B4FF] overflow-hidden">
            <TapeStrip color="#7C3AED" position="top" />

            <div className="relative aspect-video">
              <Image
                src="/podcast-thumbnail.jpg"
                alt="Podcast thumbnail"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="absolute bg-black/70 px-6 py-4 rounded-xl text-center">
                  <p className="text-[#FED403] font-extrabold text-lg leading-tight">
                    ᲛᲔᲜᲢᲐᲚᲣᲠᲘ
                    <br />
                    ᲯᲐᲜᲛᲠᲗᲔᲚᲝᲑᲐ
                    <br />
                    ᲐᲮᲐᲚᲒᲐᲖᲠᲓᲔᲑᲨᲘ
                  </p>
                </div>

                <button
                  aria-label="Play video"
                  className="relative z-10 w-16 h-16 rounded-full bg-white/30 backdrop-blur flex items-center justify-center hover:bg-white/40 transition"
                >
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-white ml-1" />
                </button>
              </div>
            </div>

            <TapeStrip color="#FED403" position="bottom" />
          </div>
        </div>

        {/* RIGHT */}
        <LogoShape />
      </div>
    </section>
  );
}
