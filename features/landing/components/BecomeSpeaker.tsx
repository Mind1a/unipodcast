"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Rocket from "../../../public/images/landing/Rocket.svg";
import Support from "../../../public/images/landing/Support.svg";
import OpenForm from "../../../public/images/landing/OpenFormArrow.svg";

import SpeakerForm from "./SpeakerForm";
import LgvBebasText from "@/features/news/components/LgvBebasText";

const BecomeSpeaker = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("modal") === "speakerForm";

  const openModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", "speakerForm");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  return (
    <div className="w-full lg:p-[120px_24px_112px] p-[32px_24px_80px] md:bg-[#0F011D] bg-[#000000] text-[#FBF4FF] flex flex-col items-center">
      <h2 className="hidden lg:block mb-[87.86px] font-display font-bold leading-[100%] text-[32px]">
        <LgvBebasText>გახდი ჩვენი სპიკერი</LgvBebasText>
      </h2>

      <div className="flex flex-col lg:gap-[263.14px] md:gap-12 gap-6 max-w-310 w-full">
        <div className="flex md:flex-row flex-col justify-between md:items-center lg:h-71.5 md:h-52 h-96 lg:pr-[132.42px] md:pr-13.75">
          <div className="lg:w-137 md:w-111.25 flex flex-col gap-4.5 relative ">
            <h3 className="lg:text-[24px] text-[20px] leading-10 font-bold z-10">
              გაქვს ისტორია, გამოცდილება ან იდეა, რომელიც სხვებს შთააგონებს?
            </h3>
            <p className="lg:text-[16px] text-[14px] leading-8 z-10">
              ჩვენ ვეძებთ ადამიანებს, რომლებიც არ უშინდებიან აზრის გამოხატვას და
              სურთ რეალური ღირებულების შექმნა.
            </p>

            <div className="hidden md:block bg-[#8A2BE2] w-50 lg:h-5.75 md:h-15 h-30 absolute lg:-bottom-10 md:-bottom-27.5 lg:left-0 left-120 rounded-[137px] lg:blur-[100px] blur-[80px]"></div>
          </div>

          <Image
            alt="Rocket"
            src={Rocket}
            width={271.58}
            height={248}
            className="h-auto w-33.25 md:w-37.25 lg:w-[271.58px]"
          />

          <div className="bg-[#8A2BE2] w-50 lg:h-5.75 md:h-15 h-25 absolute lg:-bottom-10 md:-bottom-27.5 top-40 lg:left-0 md:left-120 right-0 rounded-[137px] lg:blur-[100px] blur-[90px]"></div>
        </div>

        <div className="flex md:flex-row flex-col justify-between lg:h-105.5 md:h-64.5 h-113.75 relative">
          <div className="lg:w-104.75 md:w-81.25 flex flex-col gap-6 order-1 md:order-0">
            <h3 className="lg:text-[24px] text-[20px] leading-9.25 font-bold">
              გახდი უნიპოდასტის სპიკერი
            </h3>

            <p className="lg:text-[16px] text-[14px] leading-8">
              გააზიარე შენი ხმა ფართო აუდიტორიასთან. შეავსე ფორმა ჩვენი გუნდი 24
              საათის განმავლობაში დაგიკავშირდება.
            </p>

            <button
              onClick={openModal}
              className="border border-[#FED403] bg-[#000000] w-81 h-16 rounded-[77px] z-10 p-3.5 text-[#FED403] text-[18px] font-semibold cursor-pointer flex items-center mt-2 order-3 md:order-0 hover:bg-[#0c0c0c] transition duration-300"
            >
              <span className="w-full">შეავსე ფორმა</span>
              <Image alt="Arrow" src={OpenForm} width={32} height={32} />
            </button>

            <SpeakerForm isOpen={isOpen} onClose={closeModal} />

            <div className="bg-[#FED403] w-35 h-20 absolute top-25 right-0 rounded-[137px] blur-[110px] md:hidden block"></div>
            <div className="bg-[#FED403] w-60 h-35 absolute bottom-40 rounded-[137px] blur-[200px] hidden lg:block"></div>
          </div>

          <div className="bg-[#FED403] w-35 h-12 absolute -top-31.75 right-22.75 rounded-[137px] blur-[110px] hidden lg:block"></div>

          <Image
            alt="Support"
            src={Support}
            width={421}
            height={400}
            className="md:absolute block lg:-top-19 top-0 lg:right-22.75 right-0 lg:w-105.25 w-89.75 lg:h-100 h-64.5 order-2 md:order-0"
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeSpeaker;
