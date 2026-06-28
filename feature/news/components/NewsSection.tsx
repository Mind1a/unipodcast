"use client";
import Link from "next/link";
import { newsData } from "../data/newsData";
import NewsCard from "./NewsCard";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const NewsSection = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <div className="w-full max-w-310  mx-auto flex flex-col">
      <h2 className="text-[#FBF4FF] font-bold text-[clamp(1.25rem,3vw,2rem)] leading-[100%]  mx-auto font-display ">
        {"სიახლეები".toUpperCase()}
      </h2>
      <div className="overflow-hidden md:my-8 my-6 " ref={emblaRef}>
        <div className=" w-full flex lg:gap-5 md:gap-6 gap-4">
          {newsData.map((card) => (
            <div className="flex-none">
              <NewsCard key={card.id} card={card} />
            </div>
          ))}
        </div>
      </div>
      <Link href={"/about"} className="max-w-81.5 w-full mx-auto group ">
        <button className="w-full border-[0.5px] border-[#FED403] py-3 pr-3 pl-3.5 flex bg-black group-hover:bg-[#FED403] rounded-4xl justify-end gap-[39px] transition-colors duration-300">
          <span className="text-[#FED403] group-hover:text-black font-semibold text-base md:text-[18px] h-5.5 ease-in-out  transition-colors duration-300">
            ნახე ყველა სიახლე
          </span>
          <div className="rounded-full w-8 h-8 flex justify-center items-center border-[#FED403] group-hover:border-black transition-colors duration-300 border">
            <Image
              src={"/assets/images/newsImages/svgs/Arrow.svg"}
              alt="ისრის ფოტო"
              width={14}
              height={14}
              className="group-hover:rotate-45 transition-transform duration-300 group-hover:[filter:brightness(0)]"
            />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default NewsSection;
