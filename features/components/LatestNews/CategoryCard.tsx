import Image from "next/image";

import { bebasNeue } from "@/app/fonts";
import LgvBebasText from "@/features/news/components/LgvBebasText";

type CategoryCardProps = {
  title: string;
  iconSrc: string;
  onSelect: (title: string) => void;
};

const CategoryCard = ({ title, iconSrc, onSelect }: CategoryCardProps) => {
  return (
    <button
      type="button"
      aria-label={`${title} კატეგორიის არჩევა`}
      onClick={() => onSelect(title)}
      className="
        group flex h-[184px] w-full
        flex-col items-center justify-center
        gap-[10px] overflow-hidden
        rounded-[10px]
        bg-[#683497]
        px-3 py-4
        text-white
        transition-colors duration-200

        hover:bg-[#7940AB]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#73D7FF]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#16002C]

        md:h-[201.33px]

        xl:h-[236px]
        xl:px-6
      "
    >
      <div
        className="
          relative h-[104px] w-full shrink-0

          md:h-[115px]

          xl:h-[155px]
        "
      >
        <Image
          src={iconSrc}
          alt=""
          fill
          sizes="
            (max-width: 767px) 140px,
            (max-width: 1279px) 164px,
            293px
          "
          className="
            object-contain
            transition-transform duration-200
            group-hover:scale-[1.03]
          "
        />
      </div>

      <h2
        className={`
          ${bebasNeue.className}
          w-full text-center
          text-[20px] font-bold
          leading-[24px] text-white

          xl:whitespace-nowrap
          xl:text-[24px]
          xl:leading-[24px]
        `}
      >
        <LgvBebasText>{title}</LgvBebasText>
      </h2>
    </button>
  );
};

export default CategoryCard;
