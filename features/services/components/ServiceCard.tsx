import Image from "next/image";
import { Service } from "../types/types";
import Link from "next/link";
import LgvBebasText from "@/features/news/components/LgvBebasText";

interface ServiceCardProps {
  service: Service;
}

const TAB_ALIGNMENT: Record<Service["tagPosition"], string> = {
  left: "justify-start",
  center: "md:justify-center",
  right: "md:justify-end",
};

const CARD_RADIUS: Record<Service["tagPosition"], string> = {
  left: "rounded-tl-none rounded-tr-[32px] rounded-bl-[32px] rounded-br-[32px]",
  center:
    "rounded-tl-none rounded-tr-[32px] rounded-bl-[32px] rounded-br-[32px] md:rounded-[32px]",
  right:
    "rounded-tl-none rounded-tr-[32px] rounded-bl-[32px] rounded-br-[32px] md:rounded-tr-none md:rounded-tl-[32px] md:rounded-bl-[32px] md:rounded-br-[32px]",
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const {
    tag,
    tagPosition,
    title,
    description,
    image,
    imageAlt,
    buttonText,
    buttonHref,
    descriptionSecond,
  } = service;

  return (
    <div
      className={`relative bg-[#16002C] max-w-310  p-6 md:p-10 ${CARD_RADIUS[tagPosition]}`}
    >
      {/* tab — straddles the card's top edge */}
      <div
        className={`absolute left-0 right-0 -top-15 z-10 flex ${TAB_ALIGNMENT[tagPosition]} `}
      >
        <div className="relative">
          <span className="relative z-10 block w-[206px] md:w-[238px] rounded-t-[40px]  py-4 text-center text-2xl font-semibold uppercase bg-[#16002C] text-white">
            {tag}
          </span>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <Image
          src={image}
          alt={imageAlt}
          width={367}
          height={307}
          className="rounded-2xl object-cover lg:w-[367px] lg:h-[307px] md:w-[276px] md:h-[230px] w-[282px] h-[236px] "
          priority={false}
        />
        <div className="max-w-[732px]">
          <h3 className="mb-4 font-display text-[30px] font-bold leading-[100%] text-[#FED403] md:mb-8 md:text-[32px]">
            <LgvBebasText>{title}</LgvBebasText>
          </h3>
          <p className="mb-6 leading-6.5 text-white">{description}</p>
          <p className="mb-6 hidden leading-6.5 text-white md:block">
            {descriptionSecond}
          </p>
          <Link
            href={buttonHref}
            className="flex max-w-41.5 gap-2 rounded-[30px] border border-[#8A2BE2] px-7.5 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:border-2 hover:bg-[#1C092D]"
          >
            {buttonText}
            <Image
              src="/assets/images/serviceImages/svgs/outwardArrow.svg"
              alt="დახრილი ისარი"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
