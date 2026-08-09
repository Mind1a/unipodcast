"use client";

import { useEffect, useRef, useState } from "react";

import { bebasNeue } from "@/app/fonts";
import LgvBebasText from "@/features/news/components/LgvBebasText";

import CategoryCard from "./CategoryCard";
import NewsCard from "./NewsCard";
import NewsFilter from "./NewsFilter";

const categories = [
  {
    id: 1,
    title: "ტექნოლოგიები და კარიერა",
    iconSrc: "/assets/images/latestNews/Group.svg",
  },
  {
    id: 2,
    title: "სტუდენტური ცხოვრება",
    iconSrc: "/assets/images/latestNews/Groupedu.svg",
  },
  {
    id: 3,
    title: "განათლება და კულტურა",
    iconSrc: "/assets/images/latestNews/Icon.svg",
  },
  {
    id: 4,
    title: "ზოგადი",
    iconSrc: "/assets/images/latestNews/Groupmic.svg",
  },
] as const;

const latestNews = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: "გახდი სპიკერი",
  description:
    "როგორ ხდება მარტივი იდეათა თუ შეხედულებათა გაზიარება ამ ყველაფრის ახლიდან შესწავლითა და გამოცდილების მიღებით.",
  mobileImageSrc: "/assets/images/latestNews/mobileMain.png",
  tabletImageSrc: "/assets/images/latestNews/tabletMain.png",
  desktopImageSrc: "/assets/images/latestNews/desktopMain.png",
  date: "19.12.2025",
  dateTime: "2025-12-19",
  tags: ["სტუდენტები", "სტუდენტობა"],
  href: "#",
}));

const LatestNews = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchHighlighted, setIsSearchHighlighted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const highlightTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleCategorySelect = (title: string) => {
    setSearchValue(title);

    if (highlightTimeoutRef.current) {
      clearTimeout(highlightTimeoutRef.current);
    }

    setIsSearchHighlighted(false);

    requestAnimationFrame(() => {
      setIsSearchHighlighted(true);

      inputRef.current?.focus();

      highlightTimeoutRef.current = setTimeout(() => {
        setIsSearchHighlighted(false);
      }, 1400);
    });
  };

  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  return (
    <main
      className="
        mt-60 w-full
        bg-[radial-gradient(circle_at_top,#1B0831_0%,#0F061C_52%,#0B0315_100%)]
      "
    >
      <section
        className="
          mx-auto w-full max-w-[390px]
          px-4 pb-[60px] pt-4

          md:max-w-[768px]
          md:px-6
          md:pb-[80px]
          md:pt-8

          xl:max-w-[1439px]
          xl:px-[96px]
          xl:pb-[120px]
          xl:pt-[40px]
        "
      >
        <h1
          className={`
            ${bebasNeue.className}
            hidden text-[40px] font-bold
            leading-[40px] text-[#FED403]
            xl:block
          `}
        >
          <LgvBebasText>სიახლეები</LgvBebasText>
        </h1>

        <div
          className="
            grid grid-cols-2 gap-2

            md:mx-auto
            md:w-[704px]
            md:grid-cols-4
            md:gap-4

            xl:mt-8
            xl:w-full
            xl:grid-cols-4
            xl:gap-4
          "
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              iconSrc={category.iconSrc}
              onSelect={handleCategorySelect}
            />
          ))}
        </div>

        <div
          className="
            mt-4

            md:mt-8

            xl:mt-8
          "
        >
          <NewsFilter
            ref={inputRef}
            value={searchValue}
            isHighlighted={isSearchHighlighted}
            onChange={setSearchValue}
          />
        </div>

        <div
          className="
            mt-12 grid grid-cols-1
            gap-y-12

            md:mt-8
            md:grid-cols-2
            md:gap-x-6
            md:gap-y-6

            xl:mt-8
            xl:grid-cols-4
            xl:gap-x-6
            xl:gap-y-6
          "
        >
          {latestNews.map((news, index) => (
            <div key={news.id} className={index >= 4 ? "hidden xl:block" : ""}>
              <NewsCard
                title={news.title}
                description={news.description}
                mobileImageSrc={news.mobileImageSrc}
                tabletImageSrc={news.tabletImageSrc}
                desktopImageSrc={news.desktopImageSrc}
                date={news.date}
                dateTime={news.dateTime}
                tags={news.tags}
                href={news.href}
              />
            </div>
          ))}
        </div>

        <Pagination />
      </section>
    </main>
  );
};

const Pagination = () => {
  return (
    <nav
      aria-label="სიახლეების გვერდები"
      className="
        mt-12 flex items-center
        justify-center gap-3 text-white

        md:mt-8

        xl:mt-12
      "
    >
      <button
        type="button"
        aria-label="წინა გვერდი"
        className="
          grid h-8 w-8 place-items-center
          rounded-full bg-[#4E286C]
          text-[20px] leading-none
          transition-colors duration-200

          hover:bg-[#8A2BE2]

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white/70
        "
      >
        ‹
      </button>

      <button
        type="button"
        aria-current="page"
        aria-label="გვერდი 1"
        className="
          grid h-8 w-8 place-items-center
          rounded-full bg-white
          text-[12px] font-bold
          text-[#16002C]
        "
      >
        1
      </button>

      {[2, 3].map((page) => (
        <button
          key={page}
          type="button"
          aria-label={`გვერდი ${page}`}
          className="
            grid h-8 w-8 place-items-center
            rounded-full
            text-[12px] text-white/70
            transition-colors duration-200

            hover:bg-[#8A2BE2]
            hover:text-white

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white/70
          "
        >
          {page}
        </button>
      ))}

      <span
        aria-hidden="true"
        className="
          grid h-8 min-w-5 place-items-center
          text-[12px] text-white/50
        "
      >
        ...
      </span>

      <button
        type="button"
        aria-label="გვერდი 99"
        className="
          grid h-8 min-w-8 place-items-center
          rounded-full px-1
          text-[12px] text-white/70
          transition-colors duration-200

          hover:bg-[#8A2BE2]
          hover:text-white

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white/70
        "
      >
        99
      </button>

      <button
        type="button"
        aria-label="შემდეგი გვერდი"
        className="
          grid h-8 w-8 place-items-center
          rounded-full bg-[#4E286C]
          text-[20px] leading-none
          transition-colors duration-200

          hover:bg-[#8A2BE2]

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white/70
        "
      >
        ›
      </button>
    </nav>
  );
};

export default LatestNews;
