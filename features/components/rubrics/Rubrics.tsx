import Image from "next/image";
import rubricsIntro from "../../../public/assets/images/rubrics/rubricsIntro.jpg";

import LgvBebasText from "@/features/news/components/LgvBebasText";

import Link from "next/link";

const Rubrics = () => {
  return (
    <section className="flex flex-col items-center font-sans lg:my-[100px] md:my-12 my-8 lg:gap-[110px] md:gap-12 gap-10 px-4 md:px-6 md:py-12 lg:px-8 lg:py-0 text-[#FFFFFF]">
      {/* ---------- Fisrt section ---------- */}
      <section
        aria-labelledby="who-we-are-heading"
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1288px] gap-8 lg:gap-12 md:py-12"
      >
        <div className="w-full max-w-[548px]">
          <h2
            id="who-we-are-heading"
            className="mb-4 text-[40px] font-bold text-[#FED403] lg:mb-6 font-display"
          >
            <LgvBebasText>უნიპოდკასტის რუბრიკები</LgvBebasText>
          </h2>

          <p className="leading-[26px]">
            უნიპოდკასტის კონტენტი სტრუქტურირებულია თემატური რუბრიკების მიხედვით,
            რაც უზრუნველყოფს ფორმატის თანმიმდევრულობასა და იდენტობას.
          </p>

          <Link
            href="/form"
            className="bg-black grid relative hover:bg-[#FED403] group duration-300 hover:text-black border border-[#FED403] py-5 px-[14px] text-[#FED403] font-bold text-[18px] rounded-full max-w-[326px] w-full mt-[48px] items-center justify-center"
          >
            <span className="col-start-1 col-end-3 text-center">
              შეავსე ფორმა
            </span>
            <span className="absolute right-3 p-2 border border-[#FED403] rounded-full group-hover:border-black duration-200">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#FED403] group-hover:fill-black group-hover:rotate-45 duration-300"
              >
                <path d="M4.02516 10.5833L3.2085 9.76667L8.8085 4.16667H3.79183V3H10.7918V10H9.62516V4.98333L4.02516 10.5833Z" />
              </svg>
            </span>
          </Link>
        </div>

        <Image
          src={rubricsIntro}
          alt="გუნდის თანამშრომლობის ილუსტრაცია"
          width={629}
          height={431}
          className="rounded-[44px] w-[358px] h-[321px] md:w-[323px] lg:w-[629px] lg:h-[431px] object-cover"
        />
      </section>
    </section>
  );
};

export default Rubrics;
