import Image from "next/image";
import { NewsType } from "../types/newsTypes";

const NewsCard = ({ card }: { card: NewsType }) => {
  return (
    <div className="group w-full h-[clamp(21rem,50vw,23.5rem)] max-w-[clamp(288px,60vw,439px)] bg-[#500794] hover:bg-[#6B0FC4] rounded-4xl p-8 flex flex-col items-center transition-colors duration-300 ease-in-out">
      <div className="mb-8 h-29 md:h-21 w-full flex flex-col gap-4">
        <h3 className="text-[#F4EAFD] group-hover:text-[#FED403] font-bold text-[clamp(1.25rem,3vw,1.4375rem)] leading-none tracking-normal font-display w-full transition-colors duration-300">
          {card.title.toUpperCase()}
        </h3>
        <p className="text-[#F4EAFD] text-[clamp(0.875rem,2vw,1rem)] font-medium  leading-none tracking-normal">
          {card.description}
        </p>
      </div>
      <Image
        src={card.image}
        alt="სიახლეების ფოტოები"
        width={223}
        height={164}
        className="w-[clamp(6rem,20vw,13.9375rem)] h-auto"
      />
    </div>
  );
};

export default NewsCard;
