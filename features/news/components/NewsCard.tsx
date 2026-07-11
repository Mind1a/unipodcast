import Image from "next/image";
import { NewsType } from "../types/newsTypes";
import LgvBebasText from "./LgvBebasText";

const NewsCard = ({ card }: { card: NewsType }) => {
  return (
    <div className="group w-full h-[clamp(21rem,50vw,23.5rem)] max-w-[clamp(288px,60vw,439px)] bg-[#500794] hover:bg-[#8A2BE2DE] rounded-4xl p-8 flex flex-col items-center transition-colors duration-1000 ease-in-out">
      <div className="mb-8 h-29 md:h-21 w-full flex flex-col gap-4">
        <h3 className="text-[#F4EAFD] group-hover:text-[#FED403] text-[clamp(1.25rem,5vw,1.5rem)] md:text-[clamp(1.5rem,3vw,2rem)] leading-[100%] tracking-normal font-display font-bold w-full transition-colors duration-300">
          <LgvBebasText>{card.title}</LgvBebasText>
        </h3>
        <p className="text-[#F4EAFD] font-medium leading-[120%] font-display">
          <LgvBebasText>{card.description}</LgvBebasText>
        </p>
      </div>
      <Image
        src={card.image}
        alt="სიახლეების ფოტოები"
        width={card.imageWidth}
        height={card.imageHeight}
        loading={card.eager ? "eager" : "lazy"}
        className="h-[clamp(6rem,20vw,10.25rem)] max-w-full w-auto"
      />
    </div>
  );
};

export default NewsCard;
