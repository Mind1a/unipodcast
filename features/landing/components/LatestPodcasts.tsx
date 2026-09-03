import LgvBebasText from "@/features/news/components/LgvBebasText";
import Image from "next/image";
import type { ReactNode } from "react";

const PATH_DESKTOP_TOP_RIGHT =
  "M32 0.5H422.159C431.925 0.5 440.009 8.09056 440.623 17.8369L441.612 33.543C442.691 50.6649 456.892 64 474.048 64H570C587.397 64 601.5 78.103 601.5 95.5V288C601.5 305.397 587.397 319.5 570 319.5H32C14.603 319.5 0.5 305.397 0.5 288V32C0.500004 14.603 14.603 0.5 32 0.5Z";

const PATH_DESKTOP_TOP_LEFT =
  "M570 0.5H179.841C170.075 0.5 161.991 8.09056 161.377 17.8369L160.388 33.543C159.309 50.6649 145.108 64 127.952 64H32C14.603 64 0.5 78.103 0.5 95.5V288C0.5 305.397 14.603 319.5 32 319.5H570C587.397 319.5 601.5 305.397 601.5 288V32C601.5 14.603 587.397 0.5 570 0.5Z";

const PATH_MOBILE_BOTTOM_RIGHT =
  "M32 207.5H254.052C262.612 207.5 269.552 200.56 269.552 192V181.5C269.552 163.551 284.103 149 302.052 149H330C342.979 149 353.5 138.479 353.5 125.5V32C353.5 14.603 339.397 0.5 322 0.5H32C14.603 0.5 0.5 14.603 0.5 32V176C0.5 193.397 14.603 207.5 32 207.5Z";

type CardVariant = "topRight" | "topLeft";

type Podcast = {
  episode: string;
  duration: string;
  category: string;
  alt: string;
  variant: CardVariant;
};

const PODCASTS: Podcast[] = [
  {
    episode: "ეპიზოდი #13",
    duration: "16:56წთ",
    category: "განათლება",
    alt: "Episode 13 Thumbnail",
    variant: "topRight",
  },
  {
    episode: "ეპიზოდი #6",
    duration: "16:56წთ",
    category: "სტუდენტური ცხოვრება",
    alt: "Episode 6 Thumbnail",
    variant: "topLeft",
  },
];

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 1.333a6.667 6.667 0 1 1 0 13.334A6.667 6.667 0 0 1 8 1.333Zm0 1.333a5.333 5.333 0 1 0 0 10.667A5.333 5.333 0 0 0 8 2.666ZM8 4a.667.667 0 0 1 .667.667V8l2.666 2.667a.667.667 0 1 1-.943.943L7.333 8.61V4.667A.667.667 0 0 1 8 4Z"
        fill="currentColor"
        fillOpacity="0.7"
      />
    </svg>
  );
}

function CardShape({
  variant,
  children,
  className = "",
  contentClassName = "",
}: {
  variant: CardVariant;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  const desktopPath =
    variant === "topRight" ? PATH_DESKTOP_TOP_RIGHT : PATH_DESKTOP_TOP_LEFT;

  return (
    <div className={`group relative h-full w-full ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full sm:hidden"
        viewBox="0 0 354 208"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={PATH_MOBILE_BOTTOM_RIGHT}
          className="fill-[#7208D580] transition-[fill] duration-300 group-hover:fill-[#8A2BE2DE]"
          stroke="#37115A"
        />
      </svg>

      <svg
        className="absolute inset-0 hidden h-full w-full scale-y-[-1] sm:block xl:hidden"
        viewBox="0 0 602 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={PATH_DESKTOP_TOP_LEFT}
          className="fill-[#7208D580] transition-[fill] duration-300 group-hover:fill-[#8A2BE2DE]"
          stroke="#37115A"
        />
      </svg>

      <svg
        className="absolute inset-0 hidden h-full w-full xl:block"
        viewBox="0 0 602 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={desktopPath}
          className="fill-[#7208D580] transition-[fill] duration-300 group-hover:fill-[#8A2BE2DE]"
          stroke="#37115A"
        />
      </svg>

      <div className={`relative z-10 flex h-full w-full ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}

function ViewAllButton() {
  return (
    <button
      type="button"
      className="mx-auto hover:bg-[#FED403] group mt-8 flex h-14 w-full  max-w-81.5 cursor-pointer items-center justify-between rounded-full border border-[#FED403] bg-black px-4 transition-all duration-300  xl:absolute xl:-top-3.75 xl:left-1/2 xl:mt-0 xl:-translate-x-1/2 xl:z-20"
    >
      <span className="w-full group-hover:text-black text-center text-[18px] font-semibold leading-[100%] text-[#FED403]">
        ყველა ეპიზოდის ნახვა
      </span>
      <span className="shrink-0 group-hover:rotate-z-45 duration-200 rounded-full border group-hover:border-black  border-[#FED403] p-[8.5px]">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:fill-black "
            d="M4.02492 10.5833L3.20825 9.76667L8.80825 4.16667H3.79159V3H10.7916V10H9.62492V4.98333L4.02492 10.5833Z"
            fill="#FED403"
          />
        </svg>
      </span>
    </button>
  );
}

function PodcastCard({ podcast, index }: { podcast: Podcast; index: number }) {
  const isSecondCard = index === 1;
  const imageFirstOnDesktop = !isSecondCard;

  return (
    <article className="w-full  shrink-0  aspect-358/208 sm:aspect-602/320 sm:min-w-85  sm:max-w-145 sm:snap-center xl:h-auto xl:w-full xl:min-w-0 xl:max-w-150.5 xl:aspect-602/320">
      <CardShape
        variant={podcast.variant}
        contentClassName="relative flex-row items-center  pt-[clamp(14px,3vw,19px)]
pb-[clamp(10px,2vw,12px)]
 sm:gap-2 sm:py-8 px-6"
      >
        <Image
          width={200}
          height={177}
          src="/images/landing/podcast1.svg"
          alt={podcast.alt}
          className={`shrink-0 rounded-2xl border border-[#FED403]/25 object-cover  w-[70%] sm:order-2 sm:w-[70%] sm:aspect-270/199 sm:rounded-3xl xl:rounded-3xl xl:w-87.5 xl:h-62.25 xl:aspect-auto ${
            imageFirstOnDesktop ? "order-1 xl:order-1" : "order-1 xl:order-2"
          }`}
        />

        <div
          className={`flex h-full flex-1 mt-[clamp(50px,3vw,12px)]
            xl:mt-2
ml-[clamp(6px,2vw,12px)]   flex-col justify-start text-white sm:order-1  xl:justify-end xl:pb-3 ${
            isSecondCard
              ? "text-left sm:text-left xl:items-end xl:pr-2 xl:text-right"
              : "text-left"
          } ${imageFirstOnDesktop ? "order-2 xl:order-2" : "order-2 xl:order-1"}`}
        >
          <h3 className="font-medium text-[clamp(13px,3.5vw,20px)] text-nowrap   leading-[110%] mb-[clamp(4px,1vw,8px)] ">
            {podcast.episode}
          </h3>

          <div className=" text-[clamp(13px,3vw,16px)] flex items-center gap-1  leading-[100%] font-medium text-[#FFFFFFB2] mb-[clamp(8px,2vw,16px)] sm:gap-1.5">
            <ClockIcon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
            <span>{podcast.duration}</span>
          </div>

          <div
            className={`mb-[clamp(10px,4vw,24px)]
xl:mb-5 flex flex-col gap-0.5 sm:mb-14 sm:gap-1  ${
              isSecondCard ? "xl:items-end" : ""
            }`}
          >
            <span className="text-[clamp(14px,3.5vw,14px)] text-[#FFFFFFB2]">
              კატეგორია:
            </span>
            <span className="text-[clamp(14px,3.5vw,14px)] xl:text-nowrap font-bold text-white ">
              {podcast.category}
            </span>
          </div>

          <button
            type="button"
            className={`hidden h-11 w-fit cursor-pointer group/button hover:text-black  items-center gap-3 rounded-full border border-[#3D3302] bg-black pl-6 pr-3 text-sm font-semibold text-[#FED403] transition-all duration-300 hover:bg-[#FED403] xl:flex ${
              isSecondCard ? "xl:ml-auto" : ""
            }`}
          >
            <span className="font-bold text-[16px] leading-[100%] ">
              მოუსმინე
            </span>
            <span className="flex w-5.5 h-5.5 shrink-0 items-center justify-center  rounded-full border border-[#FED403] group-hover/button:border-black">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5.333 4L12 8L5.333 12V4Z"
                  className="group-hover/button:fill-black group-hover/button:stroke-black"
                  stroke="#FED403"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <button
          type="button"
          aria-label="მოუსმინე"
          className="absolute group/button hover:bg-[#FED403] w-[clamp(40px,12vw,50px)] h-[clamp(40px,12vw,50px)] bottom-0 left-[clamp(80px,5vw,100px)] hidden  cursor-pointer items-center justify-center rounded-full border border-[#FED403] bg-black transition-colors duration-300  sm:flex xl:hidden"
        >
          <span className="flex h-7 w-7  items-center justify-center rounded-full  ">
            <svg
              width="28"
              height="28"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5.333 4L12 8L5.333 12V4Z"
                className="group-hover/button:fill-black  group-hover/button:stroke-black"
                stroke="#FED403"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <button
          type="button"
          aria-label="მოუსმინე"
          className="absolute group/button hover:bg-[#FED403]  right-[clamp(25px,5vw,32px)] bottom-[clamp(2px,2vw,0px)] flex w-[clamp(40px,12vw,80px)]
h-[clamp(40px,12vw,80px)] cursor-pointer items-center justify-center rounded-full border border-[#FED403]  transition-colors duration-300  sm:hidden"
        >
          <span
            className="flex w-[clamp(34px,8vw,40px)]
h-[clamp(34px,8vw,40px)] items-center justify-center rounded-full   "
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5.333 4L12 8L5.333 12V4Z"
                className="group-hover/button:fill-black  group-hover/button:stroke-black"
                stroke="#FED403"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </CardShape>
    </article>
  );
}

export default function LatestPodcasts() {
  return (
    <section className="my-20 w-full sm:my-30">
      <div className="mx-auto flex w-full max-w-310 flex-col px-4 xl:px-0">
        <h2 className="font-display mb-12 text-center text-[32px] leading-[100%] font-bold text-[#FBF4FF] sm:mb-16 sm:text-[40px]">
          <LgvBebasText>უახლესი პოდკასტები</LgvBebasText>
        </h2>

        <div className="relative xl:min-h-80">
          <div className="flex w-full  flex-col gap-6 sm:flex-row sm:gap-4 sm:overflow-x-auto sm:pb-6 sm:snap-x sm:snap-mandatory scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden xl:items-start xl:justify-between xl:gap-8 xl:overflow-visible xl:pb-0">
            {PODCASTS.map((podcast, index) => (
              <PodcastCard
                key={podcast.episode}
                podcast={podcast}
                index={index}
              />
            ))}
          </div>

          <ViewAllButton />
        </div>
      </div>
    </section>
  );
}
