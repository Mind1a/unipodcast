import Image from "next/image";
import { Service } from "../types/types";
import Link from "next/link";
import LgvBebasText from "@/features/news/components/LgvBebasText";

interface ServiceCardProps {
  service: Service;
}

const TAB_ALIGNMENT: Record<Service["tagPosition"], string> = {
  left: "justify-start pl-8",
  center: "justify-center",
  right: "justify-end pr-8",
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
    <div className="max-w-310 bg-[#16002C]">
      {/* Top Div */}
      <div className="relative w-full bg-[#16002C]">
        <div className={`absolute z-10 flex ${TAB_ALIGNMENT[tagPosition]}`}>
          <div className="relative">
            <span className="text-white">{tag}</span>
          </div>
        </div>

        {/* Body  */}
        <div className="flex flex-col md:flex-row gap-6 ">
          <Image
            src={image}
            alt={imageAlt}
            width={367}
            height={307}
            className="object-cover"
            priority={false}
          />

          <div className="max-w-[732px]">
            <h3 className="text-[#FED403] font-display font-bold md:text-[32px] text-[30px] leading-[100%] mb-4 md:mb-8 ">
              <LgvBebasText>{title}</LgvBebasText>
            </h3>
            <p className="text-white leading-6.5 mb-6">{description}</p>
            <p className="text-white leading-6.5 mb-6 hidden md:block">
              {descriptionSecond}
            </p>

            <Link
              href={buttonHref}
              className="border-[#8A2BE2] border hover:border-2 hover:bg-[#1C092D] rounded-[30px] py-4 px-7.5 transition-all duration-300 ease-in-out"
            >
              <button className="text-white font-bold">{buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
